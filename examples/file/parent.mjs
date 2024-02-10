import createWorker from "../../dist/package.mjs"
import {fileURLToPath} from "node:url"
import path from "node:path"

const __dirname = path.dirname(
	fileURLToPath(import.meta.url)
)

const worker = await createWorker(
	path.join(__dirname, "child.mjs"), [1,2,3], "WorkerMain", {
		silent: false
	}
)

worker.requestHandler = (request) => {
	return "parent got request: " + JSON.stringify(request)
}

worker.sendRequest("hello from parent").then(console.log)
