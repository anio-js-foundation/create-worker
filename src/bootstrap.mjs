import {setupSlave} from "@anio-js-foundation/master-slave-protocol"

function init(requestHandler) {
	const slave = setupSlave(this.sendMessage, requestHandler)

	this.onMessage = slave.onMessage
}

export async function WebWorkerMain(request_handler_url) {
	let {requestHandler} = await import(request_handler_url)

	init.call(this, requestHandler)
}

export async function WorkerMain(request_handler_path) {
	let {requestHandler} = await import(request_handler_path)

	init.call(this, requestHandler)
}
