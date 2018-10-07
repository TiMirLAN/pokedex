const {
  connect
} = require('react-redux')
const {
  compose,
  lifecycle,
  pure
} = require('recompose')
const PockemonList = require('../components/pokemon-list')
const {
  requestPokemonList
} = require('../actions/pokemon')

const mapStateToProps = ({ pokemonList, page }) => {
  const listFrom = page.current * page.perPage
  return {
    pokemonList: pokemonList
      .items
      .slice(listFrom, listFrom + page.perPage)
  }
}
const mapDispatchToProps = dispatch => ({
  updateList () {
    dispatch(requestPokemonList())
  }
})

module.exports = compose(
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
