import {
  combineReducers
} from 'redux'
import pokemonList from './pokemon-list'
import page from './page'
import modal from './pokemon-modal'
import filter from './pokemon-filter'

export default combineReducers({
  pokemonList,
  page,
  modal,
  filter
})
