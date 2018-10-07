const {
  combineReducers
} = require('redux')
const pokemonList = require('./pokemon-list')
const page = require('./page')

module.exports = combineReducers({
  pokemonList,
  page
})
