export const UPDATE_FILTER = 'UPDATE_FILTER'
export const DROP_FILTER = 'DROP_FILTER'

export const updateFilter = (query, field) => ({
  type: UPDATE_FILTER,
  field,
  query
})

export const dropFilter = () => ({
  type: DROP_FILTER
})
