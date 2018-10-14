import {
  UPDATE_FILTER,
  DROP_FILTER,
  updateFilterItems
} from '../actions/pokemon-filter'
import {
  changePaginationTotal,
  resetCurrentPage
} from '../actions/page'
import defer from 'lodash/fp/defer'
import orderBy from 'lodash/fp/orderBy'
import flow from 'lodash/fp/flow'
import map from 'lodash/fp/map'

const makeOrderedIndexes = flow(
  orderBy('order', 'asc'),
  map('index')
)

function filterPokemonItems (store) {
  const {
    filter,
    pokemons
  } = store.getState()
  const filterData = pokemons
    .items
    .map(item => item[filter.field])
    .reduce((result, fieldValue, itemIndex) => {
      const fieldOffset = fieldValue
        .indexOf(filter.query)
      if (fieldValue.indexOf(filter.query) >= 0) {
        result.push({
          order: fieldOffset,
          index: itemIndex,
          value: fieldValue
        })
      }
      return result
    }, [])
  const filterResults = makeOrderedIndexes(filterData)

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
