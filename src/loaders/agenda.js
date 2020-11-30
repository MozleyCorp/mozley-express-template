const os = require('os')
const Agenda = require('agenda')

const config = require('../config')
const loadJobs = require('../jobs')

module.exports = async (mongoConnection) => {
  const agenda = new Agenda({
    mongo: mongoConnection,
    db: { collection: config.agenda.dbCollection },
    processEvery: config.agenda.poolTime,
    maxConcurrency: config.agenda.concurrency,
    name: `${os.hostname()}-${process.pid}`
  })

  loadJobs(agenda)

  await agenda.start()

  return agenda
}
