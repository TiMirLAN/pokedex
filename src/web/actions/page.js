const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE'
const CHANGE_PAGINATION_TOTAL = 'CHANGE_PAGINATION_TOTAL'

const changeCurrentPage = (page) => ({
  type: CHANGE_CURRENT_PAGE,
  page
})

const changePaginationTotal = total => ({
  type: CHANGE_PAGINATION_TOTAL,
  total
})

const resetCurrentPage = () => ({
  type: CHANGE_CURRENT_PAGE,
  page: 0
})

module.exports = {
  CHANGE_CURRENT_PAGE,
  CHANGE_PAGINATION_TOTAL,
  changeCurrentPage,
  changePaginationTotal,
  resetCurrentPage
}
