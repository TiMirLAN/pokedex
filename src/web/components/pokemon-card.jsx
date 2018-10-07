const React = require('react')
const Typography = require('@material-ui/core/Typography').default
const Card = require('@material-ui/core/Card').default
const CardMedia = require('@material-ui/core/CardMedia').default
const CardContent = require('@material-ui/core/CardContent').default
const Chip = require('@material-ui/core/Chip').default
const CardActions = require('@material-ui/core/CardActions').default
const Button = require('@material-ui/core/Button').default

/*
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
 */
const PokemonCard = ({ pokemonItem }) => (
  <Card>
    <CardContent>
      <Typography component='h2' variant='headline'>
        {pokemonItem.name}
      </Typography>
      <div>{
        pokemonItem.types.map(type => (
          <Chip key={type} label={type}/>
        ))
      }</div>
    </CardContent>
    <CardActions>
      <Button size='small' color='primary'>Learn more</Button>
    </CardActions>
    <CardMedia
      image={pokemonItem.coverUrl}
    />
  </Card>
)

module.exports = PokemonCard
