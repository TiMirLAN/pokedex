const {
  applyMiddleware
} = require('redux')
const pokemonApi = require('./pokemon-api')

const logging = store => next => action => {
  console.log(action)
  return next(action)
}

module.exports = applyMiddleware(
  logging,
  pokemonApi
)
