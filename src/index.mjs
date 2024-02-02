import {createMasterInterface} from "@anio-js-foundation/master-slave-protocol"
import nodeCreateWorker from "@anio-js-foundation/node-create-worker"
import browserCreateWebWorker from "@anio-js-foundation/browser-create-web-worker"
import createTemporaryResource from "@anio-js-foundation/create-temporary-resource"
import isNode from "@anio-js-core-foundation/is-node"

export default async function(
	request_handler, request_handler_export_name = "requestHandler", worker_options = {}
) {
	const createWorker = isNode() ? nodeCreateWorker : browserCreateWebWorker

	const bootstrap = await createTemporaryResource(
		`$bootstrap.mjs_file_contents$`, "text/javascript"
	)

	const worker = await createWorker(bootstrap.location, [
		request_handler, request_handler_export_name
	], worker_options)

	const master = createMasterInterface(worker.sendMessage)

	worker.onMessage = master.onMessage

	await master.slaveReady()

	bootstrap.cleanup()

	return {
		sendRequest(...args) {
			return master.sendRequest(...args)
		},

		terminate() {
			return worker.terminate()
		}
	}
}
