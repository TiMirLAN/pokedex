const {
  connect
} = require('react-redux')
const {
  compose,
  lifecycle
} = require('recompose')
const PockemonList = require('../components/pokemon-list')
const {
  requestPokemonList
} = require('../actions/pokemon')

const mapStateToProps = ({ pokemonList }) => ({ pokemonList: pokemonList.items })
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
  })
)(PockemonList)
