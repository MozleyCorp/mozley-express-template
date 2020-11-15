const v1 = require("./v1")
const agendash = require("./agendash")

module.exports = async (app) => {
	agendash(app)
	v1(app)
}
