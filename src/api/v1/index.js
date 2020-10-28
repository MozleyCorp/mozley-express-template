const { Router } = require("express")
const router = Router()

const stats = require("./stats")

module.exports = async (app) => {
	app.use("/v1", router)

	await stats(router)
}
