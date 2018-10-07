const React = require('react')
const {
  Card,
  Col,
  Row
} = require('react-materialize')

class PokemonList extends React.Component {
  render () {
    const {
      pokemonList
    } = this.props
    const list = pokemonList.map(pokemonItem => (
      <Col m={6} s={12} l={3} key={pokemonItem.name}>
        <Card
          className='blue-grey'
          textClassName='white-text'
          title={pokemonItem.name}
        >
          {pokemonItem.name}
        </Card>
      </Col>
    ))
    return <Row>{list}</Row>
  }
}

module.exports = PokemonList
