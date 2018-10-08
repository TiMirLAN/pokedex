import {
  combineReducers
} from 'redux'
import pokemonList from './pokemon-list'
import page from './page'
import modal from './pokemon-modal'

export default combineReducers({
  pokemonList,
  page,
  modal
})
