import {
  UPDATE_FILTER,
  DROP_FILTER
} from '../actions/pokemon-filter'

const DEFAULT_STATE = {
  query: null,
  field: null
}

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case UPDATE_FILTER:
      return {
        ...state,
        query: action.query,
        field: action.field
      }
    case DROP_FILTER:
      return {
        ...state,
        query: DEFAULT_STATE.query,
        field: DEFAULT_STATE.field
      }
    default:
      return state
  }
}
