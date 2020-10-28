const dotenv = require("dotenv")

// Set NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || "development"

const envFound = dotenv.config()
if (envFound.error) {
	throw new Error("⚠ Couldn't find .env file ⚠")
}

module.exports = {
	port: parseInt(process.env.PORT, 10),

	/**
	 * Used by Winston logger (pulled from the sdk)
	 */
	logs: {
		level: process.env.LOG_LEVEL || "silly",
	},

	/**
	 * Client secret for Mozley services
	 */
	client_secret: process.env.CLIENT_SECRET,

	/**
	 * API-related configurations
	 */
	api: {},
}
