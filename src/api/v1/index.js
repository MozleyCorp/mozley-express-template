const { Router } = require("express")
const router = Router()

const heroes = require("./heroes")

module.exports = async (app) => {
	app.use("/v1", router)

	await heroes(router)
}
