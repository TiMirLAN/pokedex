const {
  RECEIVE_POKEMON_LIST
} = require('../actions/pokemon')
const {
  CHANGE_CURRENT_PAGE
} = require('../actions/page')

const DEFAULT_PER_PAGE = 12
const DEFAULT_STATE = {
  perPage: DEFAULT_PER_PAGE,
  current: 0,
  total: 0
}

module.exports = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case RECEIVE_POKEMON_LIST:
      const total = Math.ceil(action.list.length / state.perPage)

      return { ...state, total }
    case CHANGE_CURRENT_PAGE:
      return { ...state, current: action.page }
    default:
      return state
  }
}
