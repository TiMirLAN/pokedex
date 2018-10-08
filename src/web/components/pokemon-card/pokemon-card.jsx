import React from 'react'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Chip from '@material-ui/core/Chip'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import blue from '@material-ui/core/colors/blue'
import brown from '@material-ui/core/colors/brown'
import grey from '@material-ui/core/colors/grey'
import green from '@material-ui/core/colors/green'
import pink from '@material-ui/core/colors/pink'
import purple from '@material-ui/core/colors/purple'
import red from '@material-ui/core/colors/red'
import yellow from '@material-ui/core/colors/yellow'

// God bless VIM s.
const BG_COLORS = {
  black: grey[600],
  blue: blue[300],
  brown: brown[300],
  gray: grey[300],
  green: green[300],
  pink: pink[300],
  purple: purple[300],
  red: red[300],
  white: 'white',
  yellow: yellow[300]
}

const PokemonCard = ({ pokemonItem, openInfo }) => (
  <Card
    style={{
      backgroundColor: BG_COLORS[pokemonItem.color]
    }}
  >
    <div style={{ display: 'flex' }}>
      <CardMedia
        image={pokemonItem.coverUrl}
        style={{
          flex: '0 0 100px',
          maxHeight: '100%'
        }}
      />
      <CardContent style={{ flex: '2 1' }}>
        <Typography component='h2' variant='headline'>
          {pokemonItem.name}
        </Typography>
        <Typography variant='caption' gutterBottom>
          {pokemonItem.genera}
        </Typography>
        <Typography>
          Types: {pokemonItem.types.join(', ')}
        </Typography>
      </CardContent>
    </div>
    <CardActions style={{ backgroundColor: 'white' }}>
      <Button
        size='small'
        color='primary'
        onClick={openInfo}
      >Learn more</Button>
    </CardActions>
  </Card>
)

export default PokemonCard
