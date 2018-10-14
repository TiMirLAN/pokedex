import capitalize from 'lodash/fp/capitalize'
import flow from 'lodash/fp/flow'
import map from 'lodash/fp/map'
import find from 'lodash/fp/find'
import sortBy from 'lodash/fp/sortBy'
import {
  RECEIVED
} from '../../helpers/api-storage'
import zip from 'lodash/zip'
import ballPng from '../../assets/ball.png'

export function preparePokemonListItem (pokemonApiListItem) {
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

export function preparePokemonItem (pokemonApiItem) {
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

export function updateCollectionItem (state, id, update) {
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
