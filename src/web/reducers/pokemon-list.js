const capitalize = require('lodash/fp/capitalize')
const flow = require('lodash/fp/flow')
const map = require('lodash/fp/map')
const sortBy = require('lodash/fp/sortBy')
const {
  REQUESTED,
  RECEIVED,
  FAILED
} = require('../helpers/api-storage')
const {
  REQUEST_POKEMON_LIST,
  RECEIVE_POKEMON_LIST,
  FAIL_POKEMON_LIST,
  REQUEST_POKEMON_ITEM,
  RECEIVE_POKEMON_ITEM,
  FAIL_POKEMON_ITEM
} = require('../actions/pokemon')
const ballPng = require('../assets/ball.png')

const DEFAULT_STATE = {
  status: RECEIVED,
  items: []
}

function preparePokemonListItem (pokemonApiListItem) {
  return {
    name: capitalize(pokemonApiListItem.name),
    id: +pokemonApiListItem.url.slice(34, -1),
    types: ['???'],
    coverUrl: ballPng
  }
}

function preparePokemonItem (pokemonApiItem) {
  const {
    sprites,
    types
  } = pokemonApiItem
  const displayTypes = flow(
    sortBy(t => t.slot),
    map(t => t.type.name)
  )(types)

  return {
    state: RECEIVED,
    coverUrl: sprites.front_default,
    types: displayTypes
  }
}

function updateCollectionItem (state, id, update) {
  let index = id - 1

  if (state.items[index].id !== id) {
    index = state.items.findIndex(item => item.id === id)
  }

  const newItem = {
    ...state.items[index],
    ...update
  }

  return {
    ...state,
    items: [
      ...state.items.slice(0, index),
      newItem,
      ...state.items.slice(index + 1)
    ]
  }
}

module.exports = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case REQUEST_POKEMON_LIST:
      return { ...state, status: REQUESTED }
    case RECEIVE_POKEMON_LIST:
      // action.list is sorted by id already
      const items = action.list.map(preparePokemonListItem)

      return { ...state, status: RECEIVED, items }
    case FAIL_POKEMON_LIST:
      return { ...state, status: FAILED }
    case REQUEST_POKEMON_ITEM:
      return updateCollectionItem(
        state,
        action.id,
        { state: REQUESTED }
      )
    case RECEIVE_POKEMON_ITEM:
      return updateCollectionItem(
        state,
        action.id,
        preparePokemonItem(action.item)
      )
    default:
      return state
  }
}
