import {
  applyMiddleware
} from 'redux'
import pokemonApi from './pokemon-api'
import pokemonFilter from './pokemon-filter'

/*
const logger = store => next => action => {
  console.groupCollapsed(action.type)
  console.log(store.getState())
  console.log(action)
  console.groupEnd(action.type)
  next(action)
}
*/

export default applyMiddleware(
  pokemonApi,
  pokemonFilter
)
