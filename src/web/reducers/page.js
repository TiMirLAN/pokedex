import {
  RECEIVE_POKEMON_LIST
} from '../actions/pokemon'
import {
  CHANGE_CURRENT_PAGE,
  CHANGE_PAGINATION_TOTAL
} from '../actions/page'

const DEFAULT_PER_PAGE = 12
const DEFAULT_STATE = {
  offset: 0,
  total: 0,
  perPage: DEFAULT_PER_PAGE
}

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case CHANGE_PAGINATION_TOTAL:
      return { ...state, total: action.total }
    case CHANGE_CURRENT_PAGE:
      return { ...state, offset: action.page }
    default:
      return state
  }
}
