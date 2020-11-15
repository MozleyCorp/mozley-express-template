"use strict"

const mzly = require("@mozley/sdk-express")

const config = require("../config")
// Adding app-wide middleware:
/// const { middlewareName } = require("../middlewares")
// you can then add it in 'customMiddleware' below

module.exports = async () => {
	const app = mzly.app({
		environment: process.env.NODE_ENV,
		clientId: config.client.c_id,
		clientSecret: config.client.c_secret,
		style: "api",
		// ⚠ CHANGE THIS TO YOUR APP DOMAIN
		frontendOrigin: "example.com",
		// Change this to what should be your apps' redirect_url. Make sure you add
		// it as a redirect_url
		onAuthenticatedRequest: "https://example.com/dashboard",
		// You can add any additional app-wide middleware here
		customMiddleware: [],
		loadRoutes: (app) => {
			// Index (for APIs)
			app.get("/", (req, res) =>
				res
					.status(200)
					.json({
						message: "OK",
					})
					.end()
			)

			// We don't require this at the top level to prevent race conditions with
			//  regards to database models
			require("../api")(app)
		},
	})

	return app
}
