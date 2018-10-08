import {
  RECEIVE_POKEMON_LIST
} from '../actions/pokemon'
import {
  CHANGE_CURRENT_PAGE
} from '../actions/page'

const DEFAULT_PER_PAGE = 12
const DEFAULT_STATE = {
  offset: 0,
  total: 0,
  perPage: DEFAULT_PER_PAGE
}

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case RECEIVE_POKEMON_LIST:
      return { ...state, total: action.list.length }
    case CHANGE_CURRENT_PAGE:
      return { ...state, offset: action.page }
    default:
      return state
  }
}
