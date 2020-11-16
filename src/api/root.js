// You should replace this with some kind of better authentication system within your app
const basicAuth = require("express-basic-auth")

const { Container } = require("typedi")
const Agendash = require("agendash")

const config = require("../config")

module.exports = async (app) => {
	const agenda = Container.get("agenda")

	app.use("/agendash", basicAuth({
		users: {
			[config.agenda.dash.userName]: config.agenda.dash.password
		},
		challenge: true,
	}), Agendash(agenda))
}