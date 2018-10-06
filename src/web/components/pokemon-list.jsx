const React = require('react')

class PokemonList extends React.Component {
  render () {
    const {
      pokemonList
    } = this.props

    return pokemonList.map(pokemonItem => (
      <div key={pokemonItem.key}>
        {pokemonItem.key}
      </div>
    ))
  }
}

module.exports = PokemonList
