import {
  connect
} from 'react-redux'
import {
  compose,
  lifecycle,
  pure
} from 'recompose'
import PockemonCard from '../components/pokemon-card/pokemon-card'
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
    dispatch(requestPokemonItem(ownState.id))
  },
  openInfo () {
    dispatch(openModal(ownState.id))
  }
})

export default compose(
  connect(
    null,
    mapDispatchToProps
  ),
  lifecycle({
    componentDidMount () {
      if (this.props.state !== RECEIVED) {
        this.props.updateItem()
      }
    }
  }),
  pure
)(PockemonCard)
