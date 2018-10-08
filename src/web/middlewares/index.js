import {
  applyMiddleware
} from 'redux'
import pokemonApi from './pokemon-api'

export default applyMiddleware(
  pokemonApi
)
