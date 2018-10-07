const {
  apiRequestAction
} = require('../helpers/api-request')

const REQUEST_POKEMON_LIST = 'REQUEST_POKEMON_LIST'
const RECEIVE_POKEMON_LIST = 'RECEIVE_POKEMON_LIST'
const FAIL_POKEMON_LIST = 'FAIL_POKEMON_LIST'

const receivePokemonList = list => ({
  type: RECEIVE_POKEMON_LIST,
  list
})

const failPokemonList = () => ({ type: FAIL_POKEMON_LIST })

const requestPokemonList = () => apiRequestAction(
  REQUEST_POKEMON_LIST,
  'pokemon',
  null,
  null,
  receivePokemonList,
  failPokemonList
)

module.exports = {
  REQUEST_POKEMON_LIST,
  RECEIVE_POKEMON_LIST,
  FAIL_POKEMON_LIST,
  requestPokemonList,
  receivePokemonList,
  failPokemonList
}
