export const UPDATE_FILTER = 'UPDATE_FILTER'
export const DROP_FILTER = 'DROP_FILTER'
export const UPDATE_FILTER_ITEMS = 'UPDATE_FILTER_ITEMS'
export const SET_DISABLED = 'SET_DIABLED'

export const updateFilter = (query, field) => ({
  type: UPDATE_FILTER,
  field,
  query
})

export const dropFilter = () => ({
  type: DROP_FILTER
})

export const updateFilterItems = items => ({
  type: UPDATE_FILTER_ITEMS,
  items
})

export const setDisabled = value => ({
  type: SET_DISABLED,
  value
})
