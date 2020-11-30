const dotenv = require('dotenv')

// Set NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

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
    level: process.env.LOG_LEVEL || 'silly'
  },

  /**
   * Client ID and Client Secret
   * for Mozley Network
   */
  client: {
    c_id: process.env.CLIENT_ID || '',
    c_secret: process.env.CLIENT_SECRET || ''
  },

  /**
   * Agendajs.com - We use agenda as a task/job scheduler
   */
  agenda: {
    dbCollection: process.env.AGENDA_DB_COLLECTION || 'agenda',
    poolTime: process.env.AGENDA_POOL_TIME || '5 seconds',
    concurrency: parseInt(process.env.AGENDA_CONCURRENCY, 10) || 20,

    /**
     * Agendash config
     */
    dash: {
      userName: 'agendash',
      password: '123456'
    }
  },

  /**
   * API-related configurations
   */
  api: {}
}
