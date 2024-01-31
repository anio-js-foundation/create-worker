/**
 * DO NOT EDIT THIS FILE DIRECTLY, IT IS AUTOMATICALLY GENERATED BY A SCRIPT.
 */
import {createMasterInterface} from "@anio-js-foundation/master-slave-protocol"

export default async function(createWorker, request_handler, worker_options = {}) {
	let is_node = false, base_url = ""

	base_url = import.meta.url.slice(0, import.meta.url.lastIndexOf("/")) + "/"

	// detect node context
	if (typeof process === "object" && import.meta.url.startsWith("file://")) {
		base_url = base_url.slice("file://".length)

		is_node = true
	} else {

		if (!("importmap" in worker_options)) {
			worker_options.importmap = {}
		}

		if (!("imports" in worker_options.importmap)) {
			worker_options.importmap.imports = {}
		}

		worker_options.importmap.imports[
			"@anio-js-foundation/master-slave-protocol"
		] = `data:text/javascript;base64,ZnVuY3Rpb24gY3JlYXRlUHJvbWlzZSgpIHsKCWxldCBwcm9taXNlLCByZXNvbHZlLCByZWplY3Q7CgoJcHJvbWlzZSA9IG5ldyBQcm9taXNlKChhLCBiKSA9PiB7CgkJcmVzb2x2ZSA9IGE7CgkJcmVqZWN0ID0gYjsKCX0pOwoKCXJldHVybiB7cHJvbWlzZSwgcmVzb2x2ZSwgcmVqZWN0fQp9CgpmdW5jdGlvbiBvbk1lc3NhZ2UkMShzdGF0ZSwgc3RyKSB7Cgljb25zdCBtZXNzYWdlID0gSlNPTi5wYXJzZShzdHIpOwoKCS8qKgoJICogTGV0IHRoZSBzbGF2ZSBzZW5kIGFzIG1hbnkgcmVhZHlfdG9rZW5zIGFzIHRoZXkgbGlrZSwKCSAqIHdlIGRvbid0IGNhcmUgYWZ0ZXIgdGhlIGluaXQgcGhhc2UuCgkgKi8KCWlmICgicmVhZHkiIGluIG1lc3NhZ2UgJiYgbWVzc2FnZS5yZWFkeSA9PT0gc3RhdGUucmVhZHlfdG9rZW4pIHsKCQlpZiAoIXN0YXRlLnJlY2VpdmVkX2NvcnJlY3RfcmVhZHlfdG9rZW4pIHsKCQkJc3RhdGUuZGVidWcoInJlY2VpdmVkIGNvcnJlY3QgcmVhZHlfdG9rZW4iKTsKCgkJCS8vIHJlc29sdmUgcmVhZHkgcHJvbWlzZQoJCQlzdGF0ZS5yZWFkeS5yZXNvbHZlKCk7CgkJfSBlbHNlIHsKCQkJc3RhdGUuZGVidWcoInJlY2VpdmVkIGNvcnJlY3QgcmVhZHlfdG9rZW4gYWdhaW4sIGlnbm9yaW5nIHRoaXMgdGltZSIpOwoJCX0KCgkJc3RhdGUucmVjZWl2ZWRfY29ycmVjdF9yZWFkeV90b2tlbiA9IHRydWU7CgoJCXJldHVybgoJfQoKCWlmICghc3RhdGUucmVjZWl2ZWRfY29ycmVjdF9yZWFkeV90b2tlbikgewoJCXRocm93IG5ldyBFcnJvcihgUmVjZWl2ZWQgYSBtZXNzYWdlIHdoaWxlIGluIHJlYWR5X3Rva2VuIGV4Y2hhbmdlLiBUaGlzIGlzIGEgYnVnLmApCgl9IGVsc2UgaWYgKCEoImNtZCIgaW4gbWVzc2FnZSkpIHsKCQl0aHJvdyBuZXcgRXJyb3IoYE1lc3NhZ2UgbWlzc2luZyAnY21kJyBmaWVsZDogJyR7SlNPTi5zdHJpbmdpZnkobWVzc2FnZSl9Jy5gKQoJfQoKCXN3aXRjaCAobWVzc2FnZS5jbWQpIHsKCQljYXNlICJyZXNwb25zZSI6IHsKCQkJY29uc3Qge3JlcXVlc3RfaWQsIHN1Y2Nlc3N9ID0gbWVzc2FnZTsKCgkJCWlmICghKHJlcXVlc3RfaWQgaW4gc3RhdGUucmVxdWVzdHMpKSB7CgkJCQlzdGF0ZS5kZWJ1ZyhgR290IGEgcmVzcG9uc2UgZnJvbSBzbGF2ZSB3aXRoIGFuIHVua25vd24gcmVxdWVzdCBpZCA9ICcke3JlcXVlc3RfaWR9Jy5gKTsKCgkJCQlyZXR1cm4KCQkJfQoKCQkJY29uc3QgewoJCQkJcmVzb2x2ZSwgcmVqZWN0LCB0aW1lcgoJCQl9ID0gc3RhdGUucmVxdWVzdHNbcmVxdWVzdF9pZF07CgoJCQlpZiAodGltZXIgIT09IG51bGwpIHsKCQkJCWNsZWFyVGltZW91dCh0aW1lcik7CgkJCX0KCgkJCWlmIChzdWNjZXNzKSB7CgkJCQlyZXNvbHZlKG1lc3NhZ2UuYm9keSk7CgkJCX0gZWxzZSB7CgkJCQlyZWplY3QobmV3IEVycm9yKG1lc3NhZ2UuZXJyb3IpKTsKCQkJfQoKCQkJZGVsZXRlIHN0YXRlLnJlcXVlc3RzW3JlcXVlc3RfaWRdOwoJCX0gYnJlYWsKCgkJZGVmYXVsdDogewoJCQl0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgY29tbWFuZCAnJHttZXNzYWdlLmNtZH0nLmApCgkJfQoJfQp9CgpmdW5jdGlvbiBzZW5kUmVxdWVzdChzdGF0ZSwgYm9keSwgdGltZW91dCA9IDApIHsKCWlmICghc3RhdGUucmVjZWl2ZWRfY29ycmVjdF9yZWFkeV90b2tlbikgewoJCXRocm93IG5ldyBFcnJvcihgQ2Fubm90IHNlbmQgcmVxdWVzdCB0byBzbGF2ZSB3aGVuIHdlJ3JlIG5vdCByZWFkeSB5ZXQuYCkKCX0KCgljb25zdCByZXF1ZXN0X2lkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzMik7CgoJbGV0IHByb21pc2UgPSBjcmVhdGVQcm9taXNlKCk7CgoJc3RhdGUucmVxdWVzdHNbcmVxdWVzdF9pZF0gPSB7CgkJcmVzb2x2ZTogcHJvbWlzZS5yZXNvbHZlLAoJCXJlamVjdDogcHJvbWlzZS5yZWplY3QsCgkJdGltZXI6IG51bGwKCX07CgoJaWYgKHRpbWVvdXQgPiAwKSB7CgkJY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KChyZXF1ZXN0X2lkLCBhbW91bnQpID0+IHsKCQkJY29uc3Qge3JlamVjdH0gPSBzdGF0ZS5yZXF1ZXN0c1tyZXF1ZXN0X2lkXTsKCgkJCXJlamVjdCgKCQkJCW5ldyBFcnJvcihgUmVxdWVzdCB0aW1lJ2Qgb3V0IGFmdGVyICR7YW1vdW50fSBtaWxsaXNlY29uZHMuYCkKCQkJKTsKCgkJCWRlbGV0ZSBzdGF0ZS5yZXF1ZXN0c1tyZXF1ZXN0X2lkXTsKCQl9LCB0aW1lb3V0LCByZXF1ZXN0X2lkLCB0aW1lb3V0KTsKCgkJc3RhdGUucmVxdWVzdHNbcmVxdWVzdF9pZF0udGltZXIgPSB0aW1lcjsKCX0KCglzdGF0ZS5zZW5kUmF3TWVzc2FnZSh7CgkJY21kOiAicmVxdWVzdCIsCgkJcmVxdWVzdF9pZCwKCQlib2R5Cgl9KTsKCglyZXR1cm4gcHJvbWlzZS5wcm9taXNlCn0KCmZ1bmN0aW9uIGluZGV4JDEoc2VuZF9tZXNzYWdlX2ZuLCBkZWJ1Z19mbiA9IG51bGwpIHsKCWxldCBzdGF0ZSA9IHsKCQlzZW5kUmF3TWVzc2FnZShkYXRhKSB7CgkJCXNlbmRfbWVzc2FnZV9mbihKU09OLnN0cmluZ2lmeShkYXRhKSArICJcbiIpOwoJCX0sCgoJCWRlYnVnKG1zZykgewoJCQlpZiAoZGVidWdfZm4pIGRlYnVnX2ZuKG1zZyk7CgkJfSwKCgkJcmVjZWl2ZWRfY29ycmVjdF9yZWFkeV90b2tlbjogZmFsc2UsCgkJcmVhZHlfdG9rZW46IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzIpLAoJCXJlYWR5OiBjcmVhdGVQcm9taXNlKCksCgkJcmVxdWVzdHM6IHt9Cgl9OwoKCS8qKgoJICogU2xhdmUgY2FuIG1pc3MgdGhpcyBtZXNzYWdlIHNvIHJlcGVhdCBpdAoJICogZXZlcnkgb25jZSBpbiBhIHdoaWxlIHRvIGdldCB0aGUgbWFzdGVyIGFuZCBzbGF2ZQoJICogc3luY2VkIHVwLgoJICovCgljb25zdCBkZWxheV9tYXAgPSBbNTAsIDUwLCA1MCwgMTAwLCAxMDAsIDE1MCwgMTUwLCAxNTAsIDI1MCwgNTAwLCA3NTAsIDEwMDBdOwoJbGV0IGRlbGF5X2luZGV4ID0gMDsKCgljb25zdCBzZW5kSW5pdCA9ICgpID0+IHsKCQlzdGF0ZS5kZWJ1Zygic2VuZGluZyBpbml0IHRva2VuIik7CgoJCXN0YXRlLnNlbmRSYXdNZXNzYWdlKHsKCQkJY21kOiAiaW5pdCIsCgkJCXJlYWR5X3Rva2VuOiBzdGF0ZS5yZWFkeV90b2tlbgoJCX0pOwoKCQlpZiAoIXN0YXRlLnJlY2VpdmVkX2NvcnJlY3RfcmVhZHlfdG9rZW4pIHsKCQkJLy8gYnkgZGVmYXVsdCB1c2UgdGhlIGxhc3QgdmFsdWUgZnJvbSB0aGUgZGVsYXkgbWFwCgkJCWxldCBhbW91bnQgPSBkZWxheV9tYXBbZGVsYXlfbWFwLmxlbmd0aCAtIDFdOwoKCQkJaWYgKGRlbGF5X21hcC5sZW5ndGggPiBkZWxheV9pbmRleCkgewoJCQkJYW1vdW50ID0gZGVsYXlfbWFwW2RlbGF5X2luZGV4XTsKCgkJCQkrK2RlbGF5X2luZGV4OwoJCQl9CgoJCQlzdGF0ZS5kZWJ1Zyhgd2lsbCBiZSBzZW5kaW5nIGluaXQgdG9rZW4gaW4gJHthbW91bnR9bXMgYWdhaW5gKTsKCQkJc2V0VGltZW91dChzZW5kSW5pdCwgYW1vdW50KTsKCQl9Cgl9OwoKCXNldFRpbWVvdXQoc2VuZEluaXQsIDApOwoKCXJldHVybiB7CgkJb25NZXNzYWdlKC4uLmFyZ3MpIHsKCQkJcmV0dXJuIG9uTWVzc2FnZSQxKHN0YXRlLCAuLi5hcmdzKQoJCX0sCgoJCXNlbmRSZXF1ZXN0KC4uLmFyZ3MpIHsKCQkJcmV0dXJuIHNlbmRSZXF1ZXN0KHN0YXRlLCAuLi5hcmdzKQoJCX0sCgoJCXNsYXZlUmVhZHkoKSB7CgkJCXJldHVybiBzdGF0ZS5yZWFkeS5wcm9taXNlCgkJfQoJfQp9CgpmdW5jdGlvbiBjcmVhdGVBc3luY011dGV4KCkgewoJbGV0IGN1cnJlbnRfcHJvbWlzZSA9IG51bGw7CgoJcmV0dXJuIHsKCQlhc3luYyBhY3F1aXJlKCkgewoJCQlpZiAoY3VycmVudF9wcm9taXNlICE9PSBudWxsKSB7CgkJCQlhd2FpdCBjdXJyZW50X3Byb21pc2U7CgkJCX0KCgkJCWxldCB1bmxvY2s7CgoJCQljdXJyZW50X3Byb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHsKCQkJCXVubG9jayA9IHJlc29sdmU7CgkJCX0pOwoKCQkJcmV0dXJuICgpID0+IHsKCQkJCXVubG9jaygpOwoJCQkJY3VycmVudF9wcm9taXNlID0gbnVsbDsKCQkJfQoJCX0KCX0KfQoKYXN5bmMgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChzdGF0ZSwgbWVzc2FnZSkgewoJY29uc3QgcmVxdWVzdF9oYW5kbGVyID0gc3RhdGUucmVxdWVzdF9oYW5kbGVyX2ZuOwoJbGV0IHJlc3BvbnNlID0gbnVsbCwgZXJyb3IgPSBudWxsOwoKCXRyeSB7CgkJcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0X2hhbmRsZXIobWVzc2FnZS5ib2R5KTsKCX0gY2F0Y2ggKF8pIHsKCQllcnJvciA9IF87Cgl9CgoJaWYgKGVycm9yID09PSBudWxsKSB7CgkJc3RhdGUuc2VuZFJhd01lc3NhZ2UoewoJCQljbWQ6ICJyZXNwb25zZSIsCgkJCXJlcXVlc3RfaWQ6IG1lc3NhZ2UucmVxdWVzdF9pZCwKCQkJc3VjY2VzczogdHJ1ZSwKCQkJYm9keTogcmVzcG9uc2UKCQl9KTsKCX0gZWxzZSB7CgkJc3RhdGUuc2VuZFJhd01lc3NhZ2UoewoJCQljbWQ6ICJyZXNwb25zZSIsCgkJCXJlcXVlc3RfaWQ6IG1lc3NhZ2UucmVxdWVzdF9pZCwKCQkJc3VjY2VzczogZmFsc2UsCgkJCWVycm9yOiBlcnJvci5tZXNzYWdlCgkJfSk7Cgl9Cn0KCmFzeW5jIGZ1bmN0aW9uIG9uTWVzc2FnZShzdGF0ZSwgc3RyKSB7Cgljb25zdCBtZXNzYWdlID0gSlNPTi5wYXJzZShzdHIpOwoKCWlmIChtZXNzYWdlLmNtZCA9PT0gImluaXQiKSB7CgkJc3RhdGUuc2VuZFJhd01lc3NhZ2UoewoJCQlyZWFkeTogbWVzc2FnZS5yZWFkeV90b2tlbgoJCX0pOwoJfSBlbHNlIGlmIChtZXNzYWdlLmNtZCA9PT0gInJlcXVlc3QiKSB7CgkJY29uc3QgbXV0ZXggPSBzdGF0ZS5yZXF1ZXN0X2hhbmRsZXJfbXV0ZXg7CgoJCWNvbnN0IHJlbGVhc2UgPSBhd2FpdCBtdXRleC5hY3F1aXJlKCk7CgoJCWF3YWl0IGhhbmRsZVJlcXVlc3Qoc3RhdGUsIG1lc3NhZ2UpOwoKCQlyZWxlYXNlKCk7Cgl9Cn0KCmZ1bmN0aW9uIGluZGV4KHNlbmRfbWVzc2FnZV9mbiwgcmVxdWVzdF9oYW5kbGVyX2ZuKSB7CglsZXQgc3RhdGUgPSB7CgkJc2VuZFJhd01lc3NhZ2UoZGF0YSkgewoJCQlzZW5kX21lc3NhZ2VfZm4oSlNPTi5zdHJpbmdpZnkoZGF0YSkgKyAiXG4iKTsKCQl9LAoJCXJlcXVlc3RfaGFuZGxlcl9tdXRleDogY3JlYXRlQXN5bmNNdXRleCgpLAoJCXJlcXVlc3RfaGFuZGxlcl9mbgoJfTsKCglyZXR1cm4gewoJCW9uTWVzc2FnZSguLi5hcmdzKSB7CgkJCXJldHVybiBvbk1lc3NhZ2Uoc3RhdGUsIC4uLmFyZ3MpCgkJfQoJfQp9CgpleHBvcnQgeyBpbmRleCQxIGFzIGNyZWF0ZU1hc3RlckludGVyZmFjZSwgaW5kZXggYXMgc2V0dXBTbGF2ZSB9Owo=`
	}

	const worker = await createWorker(`${base_url}/worker.mjs`, [request_handler], worker_options)
	const master = createMasterInterface(worker.sendMessage)

	worker.onMessage = master.onMessage

	await master.slaveReady()

	return master
}
