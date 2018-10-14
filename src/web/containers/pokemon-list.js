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

const mapStateToProps = ({ pokemonList, page, filter }) => {
  let pokemons = pokemonList.items

  if (filter.query) {
    pokemons = filter
      .items
      .map(index => pokemons[index])
  }
  return {
    pokemonList: pokemons
      .slice(
        page.offset,
        page.offset + page.perPage
      ),
    listStatus: pokemonList.status
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
