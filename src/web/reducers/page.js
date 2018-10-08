const {
  RECEIVE_POKEMON_LIST
} = require('../actions/pokemon')
const {
  CHANGE_CURRENT_PAGE
} = require('../actions/page')

const DEFAULT_PER_PAGE = 12
const DEFAULT_STATE = {
  offset: 0,
  total: 0,
  perPage: DEFAULT_PER_PAGE
}

module.exports = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case RECEIVE_POKEMON_LIST:
      return { ...state, total: action.list.length }
    case CHANGE_CURRENT_PAGE:
      return { ...state, offset: action.page }
    default:
      return state
  }
}
