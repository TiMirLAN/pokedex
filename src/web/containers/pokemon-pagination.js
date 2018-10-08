import {
  connect
} from 'react-redux'
import {
  compose
} from 'recompose'
import Pagination from 'material-ui-flat-pagination'
import {
  changeCurrentPage
} from '../actions/page'

const mapStateToProps = ({ page }) => ({
  total: page.total,
  offset: page.offset,
  limit: page.perPage
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick (e, offset) {
    dispatch(changeCurrentPage(offset))
  }
})

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Pagination)
