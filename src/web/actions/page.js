const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE'

const changeCurrentPage = (page) => ({
  type: CHANGE_CURRENT_PAGE,
  page
})

module.exports = {
  CHANGE_CURRENT_PAGE,
  changeCurrentPage
}
