import {createMasterInterface} from "@anio-js-foundation/master-slave-protocol"
import nodeCreateWorker from "@anio-js-foundation/node-create-worker"
import browserCreateWebWorker from "@anio-js-foundation/browser-create-web-worker"
import createTemporaryResource from "@anio-js-foundation/create-temporary-resource"
import createRandomIdentifier from "@anio-js-core-foundation/create-random-identifier"
import isNode from "@anio-js-core-foundation/is-node"
import bootstrap_code from "includeStaticResource:../dist/bootstrap.mjs"

export default async function(
	request_handler, request_handler_export_name = "requestHandler", worker_options = {}
) {
	const worker_id = createRandomIdentifier(32)
	const createWorker = isNode() ? nodeCreateWorker : browserCreateWebWorker

	const bootstrap = await createTemporaryResource(
		bootstrap_code, {type: "text/javascript"}
	)

	const worker = await createWorker(bootstrap.location, [
		request_handler, request_handler_export_name
	], worker_options)

	const master = createMasterInterface(worker.sendMessage)

	worker.onMessage = master.onMessage

	await master.slaveReady()

	bootstrap.cleanup()

	return {
		id: worker_id,

		sendRequest(...args) {
			return master.sendRequest(...args)
		},

		terminate() {
			return worker.terminate()
		}
	}
}
