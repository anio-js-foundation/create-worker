export async function requestHandler(request) {
	setTimeout(() => {
		this.pushMessage(`your request was ${JSON.stringify(request)}`)
	}, 1000)
}
