const React = require('react')
const {
  Col
} = require('react-materialize')
const PokemonCard = require('../containers/pokemon-card')

const PokemonList = ({ pokemonList }) => (
  pokemonList.map(pokemonItem => (
    <Col m={6} s={12} l={4} key={pokemonItem.name}>
      <PokemonCard pokemonItem={pokemonItem}/>
    </Col>
  ))
)

module.exports = PokemonList
