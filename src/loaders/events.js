const EventEmitter = require('events')
const { Container } = require('typedi')

const eve = new EventEmitter()
Container.set('eve', eve)

module.exports = async () => {
  require('../subscribers/hero')(eve)
}
