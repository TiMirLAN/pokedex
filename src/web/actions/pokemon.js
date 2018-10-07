const {
  apiRequestAction
} = require('../helpers/api-request')

const REQUEST_POKEMON_LIST = 'REQUEST_POKEMON_LIST'
const RECEIVE_POKEMON_LIST = 'RECEIVE_POKEMON_LIST'
const FAIL_POKEMON_LIST = 'FAIL_POKEMON_LIST'
const REQUEST_POKEMON_ITEM = 'REQUEST_POKEMON_ITEM'
const RECEIVE_POKEMON_ITEM = 'RECEIVE_POKEMON_ITEM'
const FAIL_POKEMON_ITEM = 'FAIL_POKEMON_ITEM'

const receivePokemonList = data => ({
  type: RECEIVE_POKEMON_LIST,
  list: data.results
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

const receivePokemonItem = (item, id) => ({
  type: RECEIVE_POKEMON_ITEM,
  item,
  id
})

const failPokemonItem = () => ({ type: FAIL_POKEMON_ITEM })

const requestPokemonItem = (id) => apiRequestAction(
  REQUEST_POKEMON_ITEM,
  'pokemon',
  id,
  null,
  receivePokemonItem,
  failPokemonItem
)

module.exports = {
  REQUEST_POKEMON_LIST,
  RECEIVE_POKEMON_LIST,
  FAIL_POKEMON_LIST,
  REQUEST_POKEMON_ITEM,
  RECEIVE_POKEMON_ITEM,
  FAIL_POKEMON_ITEM,
  requestPokemonList,
  receivePokemonList,
  failPokemonList,
  requestPokemonItem,
  receivePokemonItem,
  failPokemonItem
}
