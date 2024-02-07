export async function WorkerMain(...args) {

	console.log("hello!", args, this)

	this.onMessage = (msg) => {
		console.log("child got message from parent:", msg)
	}

	this.sendMessage("hello from child")

}
