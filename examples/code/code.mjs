import createWorker from "../../dist/package.mjs"
import {fileURLToPath} from "node:url"
import path from "node:path"

const __dirname = path.dirname(
	fileURLToPath(import.meta.url)
)

const worker = await createWorker.fromCode(`
export async function WorkerMain(...args) {
	console.log("args", args)

	this.requestHandler = (request) => {
		return "child got request: " + JSON.stringify(request)
	}

	console.log(await this.sendRequest("hello from inlined code child"))
}
`, [1,2,3], "WorkerMain", {
		silent: false
	}
)

worker.requestHandler = (request) => {
	return "parent got request: " + JSON.stringify(request)
}

worker.sendRequest("hello from parent").then(console.log)
