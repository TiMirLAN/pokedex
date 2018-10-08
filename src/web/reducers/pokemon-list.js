import capitalize from 'lodash/fp/capitalize'
import flow from 'lodash/fp/flow'
import map from 'lodash/fp/map'
import find from 'lodash/fp/find'
import sortBy from 'lodash/fp/sortBy'
import zip from 'lodash/zip'
import {
  REQUESTED,
  RECEIVED,
  FAILED
} from '../helpers/api-storage'
import {
  REQUEST_POKEMON_LIST,
  RECEIVE_POKEMON_LIST,
  FAIL_POKEMON_LIST,
  REQUEST_POKEMON_ITEM,
  RECEIVE_POKEMON_ITEM,
  FAIL_POKEMON_ITEM
} from '../actions/pokemon'
import ballPng from '../assets/ball.png'

const DEFAULT_STATE = {
  status: RECEIVED,
  items: []
}

function preparePokemonListItem (pokemonApiListItem) {
  return {
    name: capitalize(pokemonApiListItem.name),
    id: +pokemonApiListItem.url.slice(34, -1),
    types: ['???'],
    coverUrl: ballPng,
    genera: '???'
  }
}

const getTypes = flow(
  sortBy(t => t.slot),
  map(t => capitalize(t.type.name))
)

const getGenera = find(item => item.language.name === 'en')

const getAbilities = map(item => capitalize(item.ability.name))

const getStats = (stats) => (
  zip(
    ...stats
      .map(item => [item.stat.name, item.base_stat])
      .sort((a, b) => a[0] > b[0])
  )
)

function preparePokemonItem (pokemonApiItem) {
  const {
    sprites,
    types,
    weight,
    height,
    abilities,
    species,
    stats
  } = pokemonApiItem
  const [names, values] = getStats(stats)

  return {
    state: RECEIVED,
    coverUrl: sprites.front_default || ballPng,
    types: getTypes(types),
    abilities: getAbilities(abilities),
    species: capitalize(species.name),
    color: species.color.name,
    genera: getGenera(species.genera).genus,
    stats: { names, values },
    weight,
    height
  }
}

function updateCollectionItem (state, id, update) {
  let index = id - 1
  const supposedItem = state.items[index]

  if (supposedItem == null || supposedItem.id !== id) {
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

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case REQUEST_POKEMON_LIST:
      return { ...state, status: REQUESTED }
    case RECEIVE_POKEMON_LIST:
      // action.list is sorted by id already
      const items = action
        .list
        .map(preparePokemonListItem)

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
    case FAIL_POKEMON_ITEM:
      return { ...state, status: FAILED }
    default:
      return state
  }
}
