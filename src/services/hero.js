const Logger = require("../logger")
const { HeroModel } = require("../models")

class HeroService {
	constructor() { }

	async CreateHero(heroName, heroPower) {
		Logger.info(`👾 Creating hero named ${heroName}`)
		const hero = await HeroModel.create({
			name: heroName,
			power: heroPower
		})

		if (!hero) {
			throw new Error("Hero could not be created")
		}

		return hero.toObject()
	}

	async GetHero(heroName) {
		Logger.info(`👾 Fetching hero named ${heroName}`)
		const hero = await HeroModel.findOne({
			name: heroName
		})

		if (!hero) {
			throw new Error("Hero could not be found")
		}

		return hero.toObject()
	}

	async GetAllHeroes() {
		Logger.info(`👾 Fetching all heroes`)
		const heroes = await HeroModel.find()

		if (!heroes) {
			throw new Error("Heroes could not be returned")
		}

		return heroes
	}
}

module.exports = new HeroService()