import React from 'react'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Chip from '@material-ui/core/Chip'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'

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

export default PokemonCard
