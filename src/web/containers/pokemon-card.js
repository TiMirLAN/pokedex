const {
  connect
} = require('react-redux')
const {
  compose,
  lifecycle,
  pure
} = require('recompose')
const PockemonCard = require('../components/pokemon-card')
const {
  RECEIVED
} = require('../helpers/api-storage')
const {
  requestPokemonItem
} = require('../actions/pokemon')

const mapDispatchToProps = (dispatch, ownState) => ({
  updateItem () {
    const { id } = ownState.pokemonItem

    dispatch(requestPokemonItem(id))
  }
})

module.exports = compose(
  connect(
    null,
    mapDispatchToProps
  ),
  lifecycle({
    componentDidMount () {
      if (this.props.pokemonItem.state !== RECEIVED) {
        this.props.updateItem()
      }
    }
  })
)(PockemonCard)
