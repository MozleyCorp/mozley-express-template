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
	 * Connection URL for MongoDB
	 * Do not use SQL-based databases
	 */
	databaseURL: process.env.DATABASE_URL,

	/**
	 * Used by Winston logger (pulled from the sdk)
	 */
	logs: {
		level: process.env.LOG_LEVEL || "silly",
	},

	/**
	 * Client ID and Client Secret
	 * for Mozley Network
	 */
	client: {
		c_id: process.env.CLIENT_ID || "",
		c_secret: process.env.CLIENT_SECRET || "",
	},

	/**
	 * API-related configurations
	 */
	api: {},
}
