module.exports = (agenda) => {
	agenda.define("welcome user", { priority: "high", concurrency: 10 }, async job => {
		const { name } = job.attrs.data
		console.log("👋 Welcome, " + name)
	})
}