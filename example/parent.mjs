import createWorker from "../dist/package.mjs"
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

worker.onMessage = (msg) => {
	console.log("parent got message from child:", msg)
}

worker.sendMessage("hello from parent")
