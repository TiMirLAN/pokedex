const React = require('react')
const {
  Card,
  CardTitle,
  Chip
} = require('react-materialize')

const PokemonCard = ({ pokemonItem }) => (
  <Card
    horizontal
    className='grey lighten-4'
    textClassName='grey-text text-darken-4'
    header={
      <CardTitle image={pokemonItem.coverUrl}/>
    }
    title={pokemonItem.name}
  >
    <div>{
      pokemonItem.types.map(type => <Chip key={type}>{type}</Chip>)
    }</div>
  </Card>
)

module.exports = PokemonCard
