const React = require('react')
const {
  Card,
  Col
} = require('react-materialize')

const PokemonList = ({ pokemonList }) => (
  pokemonList.map(pokemonItem => (
    <Col m={6} s={12} l={4} key={pokemonItem.name}>
      <Card
        className='blue-grey'
        textClassName='white-text'
        title={pokemonItem.name}
      >
        {pokemonItem.name}
      </Card>
    </Col>
  ))
)

module.exports = PokemonList
