import {
  connect
} from 'react-redux'
import {
  compose,
  lifecycle,
  pure
} from 'recompose'
import PockemonCard from '../components/pokemon-card'
import {
  RECEIVED
} from '../helpers/api-storage'
import {
  requestPokemonItem
} from '../actions/pokemon'

const mapDispatchToProps = (dispatch, ownState) => ({
  updateItem () {
    const { id } = ownState.pokemonItem

    dispatch(requestPokemonItem(id))
  }
})

export default compose(
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
  }),
  pure
)(PockemonCard)
