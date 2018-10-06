const {
  combineReducers
} = require('redux')
const pokemonList = require('./pokemon-list')

module.exports = combineReducers({
  pokemonList
})
