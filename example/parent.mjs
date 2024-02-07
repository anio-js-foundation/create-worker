import createWorker from "../dist/package.mjs"
import {fileURLToPath} from "node:url"
import path from "node:path"

const __dirname = path.dirname(
	fileURLToPath(import.meta.url)
)

const worker = await createWorker(
	path.join(__dirname, "child.mjs"), "requestHandler", {
		silent: false
	}
)

worker.sendRequest("init")

setInterval(() => {
	console.log(worker.getPushedMessages())
}, 1000)
