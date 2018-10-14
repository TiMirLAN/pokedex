import {
  connect
} from 'react-redux'
import debounce from 'lodash/debounce'
import PokemonSearch from '../components/pokemon-search/pokemon-search'
import {
  updateSearch,
  dropSearch
} from '../actions/pokemon-filter'

const mapStateToProps = ({ filter }) => ({
  query: filter.quefy
})
const debouncedOnSearch = debounce((query, dispatch) => {
  if (!query) {
    return dispatch(dropSearch())
  }
  dispatch(updateSearch(query, 'name'))
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
