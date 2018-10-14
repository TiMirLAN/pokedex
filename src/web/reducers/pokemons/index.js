import {
  REQUESTED,
  RECEIVED,
  FAILED
} from '../../helpers/api-storage'
import {
  REQUEST_POKEMON_LIST,
  RECEIVE_POKEMON_LIST,
  FAIL_POKEMON_LIST,
  REQUEST_POKEMON_ITEM,
  RECEIVE_POKEMON_ITEM,
  FAIL_POKEMON_ITEM
} from '../../actions/pokemon'
import {
  preparePokemonListItem,
  preparePokemonItem,
  updateCollectionItem
} from './helpers'

const DEFAULT_STATE = {
  status: RECEIVED,
  items: [],
  search: null
}

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case REQUEST_POKEMON_LIST:
      return { ...state, status: REQUESTED }
    case RECEIVE_POKEMON_LIST:
      // action.list is sorted by id already
      const items = action
        .list
        .map(preparePokemonListItem)

      return { ...state, status: RECEIVED, items }
    case FAIL_POKEMON_LIST:
      return { ...state, status: FAILED }
    case REQUEST_POKEMON_ITEM:
      return updateCollectionItem(
        state,
        action.id,
        { state: REQUESTED }
      )
    case RECEIVE_POKEMON_ITEM:
      return updateCollectionItem(
        state,
        action.id,
        preparePokemonItem(action.item)
      )
    case FAIL_POKEMON_ITEM:
      return { ...state, status: FAILED }
    default:
      return state
  }
}
