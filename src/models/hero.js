const mongoose = require("mongoose")

const Hero = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			index: true,
			unique: true,
		},

		power: {
			type: String,
			default: "Powerless :("
		},
	},
	{ timestamps: true, collection: "heroes" }
)

module.exports = mongoose.model("Hero", Hero)