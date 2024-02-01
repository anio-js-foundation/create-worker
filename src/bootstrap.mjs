import {setupSlave} from "@anio-js-foundation/master-slave-protocol"

function init(requestHandler) {
	const slave = setupSlave(this.sendMessage, requestHandler)

	this.onMessage = slave.onMessage
}

export async function WebWorkerMain(request_handler_url, request_handler_export_name) {
	let mod = await import(request_handler_url)

	init.call(this, mod[request_handler_export_name])
}

export async function WorkerMain(request_handler_path, request_handler_export_name) {
	let mod = await import(request_handler_path)

	init.call(this, mod[request_handler_export_name])
}
