import createRequestResponseProtocol from "@anio-js-foundation/request-response-protocol"

async function initialize(worker_api, worker_main, worker_args) {
	const protocol = createRequestResponseProtocol(worker_api, "worker")

	// use setTimeout(fn, 0)
	// to make sure the parent can initialize before we're sending any data
	// if we're not doing this, then this will deadlock the child/parent
	setTimeout(async () => {
		await protocol.ready()

		await worker_main.apply(protocol, worker_args)
	}, 0)
}

export async function WebWorkerMain(worker_main_url, request_handler_export_name, ...worker_args) {
	const mod = await import(worker_main_url)
	const main = mod[request_handler_export_name]

	await initialize(this, main, worker_args)
}

export async function NodeWorkerMain(worker_main_url, request_handler_export_name, ...worker_args) {
	const mod = await import(worker_main_url)
	const main = mod[request_handler_export_name]

	await initialize(this, main, worker_args)
}
