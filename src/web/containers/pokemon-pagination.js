const {
  connect
} = require('react-redux')
const {
  compose
} = require('recompose')
const {
  Pagination
} = require('react-materialize')
const {
  changeCurrentPage
} = require('../actions/page')

const MAX_PAGINATION_BUTTONS = 5

const mapStateToProps = ({ page }) => ({
  items: page.total,
  activePage: page.current + 1,
  maxButtons: MAX_PAGINATION_BUTTONS
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSelect (newPage) {
    dispatch(changeCurrentPage(newPage - 1))
  }
})

module.exports = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Pagination)
