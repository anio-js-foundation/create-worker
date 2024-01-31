import {createMasterInterface} from "@anio-js-foundation/master-slave-protocol"
import nodeCreateWorker from "@anio-js-foundation/node-create-worker"
import browserCreateWebWorker from "@anio-js-foundation/browser-create-web-worker"
import createTemporaryResource from "@anio-js-core-foundation/create-temporary-resource"

export default async function(request_handler, worker_options = {}) {
	let is_node = false, base_url = "", createWorker = null

	base_url = import.meta.url.slice(0, import.meta.url.lastIndexOf("/")) + "/"

	// detect node context
	if (typeof process === "object" && import.meta.url.startsWith("file://")) {
		base_url = base_url.slice("file://".length)

		is_node = true

		createWorker = nodeCreateWorker
	} else {
		createWorker = browserCreateWebWorker
	}

	const bootstrap = await createTemporaryResource(
		`$bootstrap.mjs_file_contents$`, "text/javascript"
	)

	const worker = await createWorker(bootstrap.location, [request_handler], worker_options)
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
