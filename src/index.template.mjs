import {createMasterInterface} from "@anio-js-foundation/master-slave-protocol"

export default async function(request_handler, worker_options = {}) {
	let is_node = false, base_url = "", createWorker = null

	base_url = import.meta.url.slice(0, import.meta.url.lastIndexOf("/")) + "/"

	// detect node context
	if (typeof process === "object" && import.meta.url.startsWith("file://")) {
		base_url = base_url.slice("file://".length)

		is_node = true

		createWorker = await import(`${base_url}/createNodeWorker.mjs`)
	} else {
		if (!("importmap" in worker_options)) {
			worker_options.importmap = {}
		}

		if (!("imports" in worker_options.importmap)) {
			worker_options.importmap.imports = {}
		}

		worker_options.importmap.imports[
			"@anio-js-foundation/master-slave-protocol"
		] = `data:text/javascript;base64,$master-slave-protocol-base64$`

		createWorker = await import(`${base_url}/createWebWorker.mjs`)
	}

	const worker = await createWorker.default(`${base_url}/worker.mjs`, [request_handler], worker_options)
	const master = createMasterInterface(worker.sendMessage)

	worker.onMessage = master.onMessage

	await master.slaveReady()

	return {
		sendRequest(...args) {
			return master.sendRequest(...args)
		},

		terminate() {
			return worker.terminate()
		}
	}
}
