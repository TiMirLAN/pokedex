import {
  connect
} from 'react-redux'
import {
  compose,
  lifecycle,
  pure
} from 'recompose'
import PockemonList from '../components/pokemon-list/pokemon-list'
import {
  requestPokemonList
} from '../actions/pokemon'

const mapStateToProps = ({ pokemons, page, filter }) => {
  let displayedPokemons = pokemons.items

  if (filter.query) {
    displayedPokemons = filter
      .items
      .map(index => pokemons.items[index])
  }
  return {
    pokemons: displayedPokemons
      .slice(
        page.offset,
        page.offset + page.perPage
      ),
    listStatus: pokemons.status
  }
}
const mapDispatchToProps = dispatch => ({
  updateList () {
    dispatch(requestPokemonList())
  }
})

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  lifecycle({
    componentDidMount () {
      this.props.updateList()
    }
  }),
  pure
)(PockemonList)
