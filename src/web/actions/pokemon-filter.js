export const UPDATE_SEARCH = 'UPDATE_SEARCH'
export const DROP_SEARCH = 'DROP_SEARCH'

export const updateSearch = (query, field) => ({
  type: UPDATE_SEARCH,
  field,
  query
})

export const dropSearch = () => ({
  type: DROP_SEARCH
})
