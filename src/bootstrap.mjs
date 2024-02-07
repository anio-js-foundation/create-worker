export async function WebWorkerMain(worker_main_url, worker_main_export_name, ...worker_args) {
	const mod = await import(worker_main_url)
	const main = mod[worker_main_export_name].bind(this)

	await main(...worker_args)
}

export async function NodeWorkerMain(worker_main_url, worker_main_export_name, ...worker_args) {
	const mod = await import(worker_main_url)
	const main = mod[worker_main_export_name].bind(this)

	await main(...worker_args)
}
