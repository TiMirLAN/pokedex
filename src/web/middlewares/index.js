import {
  applyMiddleware
} from 'redux'
import pokemonApi from './pokemon-api'

const logging = store => next => action => {
  console.log(action)
  return next(action)
}

export default applyMiddleware(
  logging,
  pokemonApi
)
