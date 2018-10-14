import {
  UPDATE_FILTER,
  DROP_FILTER
} from '../actions/pokemon-filter'

export default store => next => action => {
  switch (action.type) {
    case UPDATE_FILTER:
      console.log(action)
      // fall through
    case DROP_FILTER:
      console.log(action)
      // fall through
    default:
      next(action)
  }
}
