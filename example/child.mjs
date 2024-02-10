export async function WorkerMain(...args) {
	console.log("args", args)

	this.requestHandler = (request) => {
		return "child got request: " + JSON.stringify(request)
	}

	console.log(await this.sendRequest("hello from child"))
}
