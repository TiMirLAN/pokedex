import {
  applyMiddleware
} from 'redux'
import pokemonApi from './pokemon-api'
import pokemonFilter from './pokemon-filter'

export default applyMiddleware(
  pokemonApi,
  pokemonFilter
)
