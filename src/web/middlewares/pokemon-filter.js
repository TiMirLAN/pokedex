import {
  UPDATE_FILTER,
  updateFilterItems
} from '../actions/pokemon-filter'
import defer from 'lodash/fp/defer'

function filterPokemonItems (store) {
  const {
    filter,
    pokemonList
  } = store.getState()
  const filterResults = pokemonList
    .items
    .map(item => item[filter.field])
    .reduce((result, fieldValue, itemIndex) => {
      const fieldOffset = fieldValue
        .indexOf(filter.query)
      if (fieldValue.indexOf(filter.query) >= 0) {
        result.push({
          order: fieldOffset,
          index: itemIndex
        })
      }
      return result
    }, [])
    .sort((a, b) => a.order > b.order)
    .map(({ index }) => index)

  store.dispatch(updateFilterItems(filterResults))
  console.log(filterResults)
}

export default store => next => action => {
  switch (action.type) {
    case UPDATE_FILTER:
      defer(filterPokemonItems, store)
      // fall through
    default:
      next(action)
  }
}
