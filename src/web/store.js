const {
  createStore,
} = require('redux')
const reducers = require('./reducers')
const middlewares = require('./middlewares')

module.exports = createStore(
  reducers,
  middlewares
)
