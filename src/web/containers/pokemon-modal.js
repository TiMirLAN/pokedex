import {
  connect
} from 'react-redux'
import PokemonModal from '../components/pokemon-modal/pokemon-modal'
import {
  closeModal
} from '../actions/pokemon-modal'

const mapStateToProps = ({ modal, pokemons }) => {
  const pokemon = modal.pokemonId
    ? pokemons.items.find(({ id }) => modal.pokemonId === id)
    : {}

  return {
    isOpen: modal.isOpen,
    ...pokemon
  }
}

const mapDispatchToProps = dispatch => ({
  onClose () {
    dispatch(closeModal())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonModal)
