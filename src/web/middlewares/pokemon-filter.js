import {
  UPDATE_FILTER,
  DROP_FILTER,
  updateFilterItems,
} from '../actions/pokemon-filter'
import {
  changePaginationTotal,
  resetCurrentPage
} from '../actions/page'
import defer from 'lodash/fp/defer'

function filterPokemonItems (store) {
  const {
    filter,
    pokemons
  } = store.getState()
  const filterResults = pokemons
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
  store.dispatch(resetCurrentPage())
  store.dispatch(changePaginationTotal(filterResults.length))
}

function afterDropFilter (store) {
  const { pokemons } = store.getState()

  store.dispatch(resetCurrentPage())
  store.dispatch(changePaginationTotal(pokemons.items.length))
}

export default store => next => action => {
  switch (action.type) {
    case UPDATE_FILTER:
      defer(filterPokemonItems, store)
      break
    case DROP_FILTER:
      defer(afterDropFilter, store)
      break
  }
  next(action)
}
