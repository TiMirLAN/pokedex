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
import {
  openModal
} from '../actions/pokemon-modal'

const mapDispatchToProps = (dispatch, ownState) => ({
  updateItem () {
    const { id } = ownState.pokemonItem

    dispatch(requestPokemonItem(id))
  },
  openInfo () {
    const { id } = ownState.pokemonItem

    dispatch(openModal(id))
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
