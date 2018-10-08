import {
  connect
} from 'react-redux'
import PokemonModal from '../components/pokemon-modal'
import {
  closeModal
} from '../actions/pokemon-modal'

const mapStateToProps = ({ modal, pokemonList }) => ({
  isOpen: modal.isOpen,
  pokemon: modal.pokemonId
    ? pokemonList.items.find(({ id }) => modal.pokemonId === id)
    : {
      types: []
    }
})

const mapDispatchToProps = dispatch => ({
  onClose () {
    dispatch(closeModal())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonModal)
