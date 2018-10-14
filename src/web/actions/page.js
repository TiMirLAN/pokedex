export const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE'
export const CHANGE_PAGINATION_TOTAL = 'CHANGE_PAGINATION_TOTAL'

export const changeCurrentPage = (page) => ({
  type: CHANGE_CURRENT_PAGE,
  page
})

export const changePaginationTotal = total => ({
  type: CHANGE_PAGINATION_TOTAL,
  total
})

export const resetCurrentPage = () => ({
  type: CHANGE_CURRENT_PAGE,
  page: 0
})
