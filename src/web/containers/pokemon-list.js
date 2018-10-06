const {
  connect
} = require('react-redux')
const PockemonList = require('../components/pokemon-list')

const mapStateToProps = ({ pokemonList }) => ({ pokemonList })

module.exports = connect(
  mapStateToProps
)(PockemonList)
