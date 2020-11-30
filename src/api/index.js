const v1 = require('./v1')
const root = require('./root')

module.exports = async (app) => {
  root(app)
  v1(app)
}
