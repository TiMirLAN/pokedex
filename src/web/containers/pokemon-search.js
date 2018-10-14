import {
  connect
} from 'react-redux'
import debounce from 'lodash/debounce'
import toLower from 'lodash/fp/toLower'
import PokemonSearch from '../components/pokemon-search/pokemon-search'
import {
  updateFilter,
  dropFilter
} from '../actions/pokemon-filter'

const mapStateToProps = ({ filter }) => ({
  query: filter.quefy
})
const debouncedOnSearch = debounce((query, dispatch) => {
  if (!query) {
    return dispatch(dropFilter())
  }
  dispatch(updateFilter(toLower(query), 'name'))
}, 300)

const mapDispatchToProps = dispatch => ({
  onSearch ({ target }) {
    debouncedOnSearch(target.value, dispatch)
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonSearch)
