import {
  combineReducers
} from 'redux'
import pokemons from './pokemons'
import page from './page'
import modal from './pokemon-modal'
import filter from './pokemon-filter'

export default combineReducers({
  pokemons,
  page,
  modal,
  filter
})
