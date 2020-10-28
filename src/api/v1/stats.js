const { endpoint } = require("@mozley/sdk-express")
const { Router } = require("express")
const router = Router()

module.exports = async (app) => {
	app.use("/stats", router)

	endpoint(router, "get", "/users", {}, (req, res) => {
		res.json({
			totalUsers: 10,
		})
	})
}
