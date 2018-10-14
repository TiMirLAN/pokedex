import {
  UPDATE_SEARCH,
  DROP_SEARCH
} from '../actions/pokemon-filter'

export default store => next => action => {
  switch (action.type) {
    case UPDATE_SEARCH:
      console.log(action)
      // fall through
    case DROP_SEARCH:
      console.log(action)
      // fall through
    default:
      next(action)
  }
}
