const { Joi } = require("celebrate")
const { endpoint } = require("@mozley/sdk-express")
const { Router } = require("express")
const router = Router()

const HeroService = require("../../services/hero")

module.exports = async (app) => {
	app.use("/heroes", router)

	endpoint(router, "get", "/", {}, (req, res, next) => {
		HeroService.GetAllHeroes().then(heroes => {
			res.status(200).json(heroes)
		}).catch(err => {
			next(err)
		})
	})

	endpoint(router, "get", "/:heroName", {
		validator: {
			params: Joi.object({
				heroName: Joi.string().required()
			})
		}
	}, (req, res, next) => {
		const name = req.params.heroName

		HeroService.GetHero(name).then(hero => {
			res.status(200).json(hero)
		}).catch(err => {
			next(err)
		})
	})

	endpoint(router, "put", "/", {
		validator: {
			body: Joi.object({
				heroName: Joi.string().required(),
				heroPower: Joi.string().optional()
			})
		}
	}, (req, res, next) => {
		const name = req.body.heroName
		const power = req.body.heroPower

		HeroService.CreateHero(name, power).then(hero => {
			res.status(200).json(hero)
		}).catch(err => {
			next(err)
		})
	})
}
