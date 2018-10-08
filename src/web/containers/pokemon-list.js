import {
  connect
} from 'react-redux'
import {
  compose,
  lifecycle,
  pure
} from 'recompose'
import PockemonList from '../components/pokemon-list'
import {
  requestPokemonList
} from '../actions/pokemon'

const mapStateToProps = ({ pokemonList, page }) => {
  console.log(page)
  return {
    pokemonList: pokemonList
      .items
      .slice(
        page.offset,
        page.offset + page.perPage
      )
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
