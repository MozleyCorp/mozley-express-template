"use strict"

const Logger = require("../logger")

const mongoLoader = require("./mongo")
const expressLoader = require("./express")

module.exports = async () => {
	const mongoConnection = await mongoLoader()
	Logger.info("✌ DB loaded and connected!")

	const models = require("../models")
	Logger.info("✌ Mongoose models required and loaded!")

	const app = await expressLoader()
	app.mongo = mongoConnection
	app.models = models
	Logger.info("✌ Express app created")

	return app
}
