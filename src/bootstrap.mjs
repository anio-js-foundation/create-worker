import {setupSlave} from "@anio-js-foundation/master-slave-protocol"

function init(worker, requestHandler) {
	let requestHandler_this = {}

	const bound_requestHandler = requestHandler.bind(requestHandler_this)
	const slave = setupSlave(worker.sendMessage, bound_requestHandler)

	requestHandler_this.pushMessage = slave.pushMessage

	worker.onMessage = slave.onMessage
}

export async function WebWorkerMain(request_handler_url, request_handler_export_name) {
	let mod = await import(request_handler_url)

	init(this, mod[request_handler_export_name])
}

export async function WorkerMain(request_handler_path, request_handler_export_name) {
	let mod = await import(request_handler_path)

	init(this, mod[request_handler_export_name])
}
