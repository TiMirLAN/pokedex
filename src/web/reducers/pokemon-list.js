const {
  REQUESTED,
  RECEIVED,
  FAILED
} = require('../helpers/api-storage')
const {
  REQUEST_POKEMON_LIST,
  RECEIVE_POKEMON_LIST,
  FAIL_POKEMON_LIST
} = require('../actions/pokemon')

const DEFAULT_STATE = {
  status: RECEIVED,
  items: []
}

module.exports = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case REQUEST_POKEMON_LIST:
      return { ...state, status: REQUESTED }
    case RECEIVE_POKEMON_LIST:
      // action.list is sorted by id already
      return { ...state, status: RECEIVED, items: action.list }
    case FAIL_POKEMON_LIST:
      return { ...state, status: FAILED }
    default:
      return state
  }
}
