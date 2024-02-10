import nodeCreateWorker from "@anio-js-foundation/node-create-worker"
import browserCreateWebWorker from "@anio-js-foundation/browser-create-web-worker"
import createTemporaryResource from "@anio-js-foundation/create-temporary-resource"
import isNode from "@anio-js-core-foundation/is-node"
import createRequestResponseProtocol from "@anio-js-foundation/request-response-protocol"
import bootstrap_code from "includeStaticResource:../dist/bootstrap.mjs"

async function createWorker(
	worker_main_url, worker_args = [], worker_main_export_name = "WorkerMain", worker_options = {}
) {
	const createWorker = isNode() ? nodeCreateWorker : browserCreateWebWorker

	const bootstrap = await createTemporaryResource(
		bootstrap_code, {type: "text/javascript"}
	)

	const worker = await createWorker(bootstrap.location, [
		worker_main_url, worker_main_export_name, ...worker_args
	], worker_options)

	bootstrap.cleanup()

	const protocol = createRequestResponseProtocol(worker, "Main -> NodeWorker")

	protocol.terminate = () => { return worker.terminate() }

	await protocol.ready()

	return protocol
}

createWorker.fromCode = async function createWorkerFromCode(
	worker_main_code, worker_args = [], worker_main_export_name = "WorkerMain", worker_options = {}
) {
	const worker = await createTemporaryResource(
		worker_main_code, {type: "text/javascript"}
	)

	const instance = await createWorker(
		worker.location, worker_args, worker_main_export_name, worker_options
	)

	await worker.cleanup()

	return instance
}

export default createWorker
