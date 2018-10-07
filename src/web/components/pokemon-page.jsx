const React = require('react')
const {
  Row
} = require('react-materialize')
const PokemonList = require('../containers/pokemon-list')
const PokemonPagination = require('../containers/pokemon-pagination')

const PokemonPage = () => (
  <div>
    <Row>
      <PokemonList/>
    </Row>
    <PokemonPagination/>
  </div>
)

module.exports = PokemonPage
