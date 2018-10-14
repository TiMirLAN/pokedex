import {
  UPDATE_FILTER,
  UPDATE_FILTER_ITEMS,
  DROP_FILTER
} from '../actions/pokemon-filter'

const DEFAULT_STATE = {
  query: null,
  field: null,
  items: []
}

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case UPDATE_FILTER:
      return {
        ...state,
        query: action.query,
        field: action.field
      }
    case UPDATE_FILTER_ITEMS:
      return {
        ...state,
        items: action.items
      }
    case DROP_FILTER:
      return {
        ...state,
        query: DEFAULT_STATE.query,
        field: DEFAULT_STATE.field,
        items: DEFAULT_STATE.items
      }
    default:
      return state
  }
}
