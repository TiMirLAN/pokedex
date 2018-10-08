import {
  OPEN_MODAL,
  CLOSE_MODAL
} from '../actions/pokemon-modal'

const DEFAULT_STATE = {
  isOpen: false,
  pokemonId: null
}

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isOpen: true,
        pokemonId: action.pokemonId
      }
    case CLOSE_MODAL:
      return {
        ...state,
        isOpen: false,
        pokemonId: DEFAULT_STATE.pokemonId
      }
    default:
      return state
  }
}
