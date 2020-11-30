'use strict'

const Logger = require('../logger')
const { Container } = require('typedi')

const eventLoader = require('./events')
const mongoLoader = require('./mongo')
const agendaLoader = require('./agenda')
const expressLoader = require('./express')

module.exports = async () => {
  const mongoConnection = await mongoLoader()
  Logger.info('✌ DB loaded and connected!')

  const models = require('../models')
  Container.set('models', models)
  Logger.info('✌ Mongoose models required and loaded!')

  const agenda = await agendaLoader(mongoConnection)
  Container.set('agenda', agenda)
  Logger.info('✌ Agenda has been loaded!')

  const app = await expressLoader()
  app.models = models
  app.agenda = agenda
  Logger.info('✌ Express app created!')

  await eventLoader()
  Logger.info('✌ Events are listening!')

  return app
}
