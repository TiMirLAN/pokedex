const {
  RECEIVE_POKEMON_LIST
} = require('../actions/pokemon')

const DEFAULT_PER_PAGE = 20
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
    default:
      return state
  }
}
