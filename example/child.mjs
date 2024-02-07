export async function WorkerMain(...args) {
	this.on("message", (msg) => {
		console.log("child got message from parent:", msg)
	})

	this.sendMessage("hello from child")
}
