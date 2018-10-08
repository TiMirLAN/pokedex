import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import blue from '@material-ui/core/colors/blue'
import grey from '@material-ui/core/colors/grey'
import green from '@material-ui/core/colors/green'
import pink from '@material-ui/core/colors/pink'
import purple from '@material-ui/core/colors/purple'
import orange from '@material-ui/core/colors/orange'
import yellow from '@material-ui/core/colors/yellow'

const BG_COLORS = {
  black: grey[600],
  blue: blue[300],
  // See docs about orange https://pokeapi.co/docs/v2.html#pok%C3%A9mon-colors
  brown: orange[300],
  gray: grey[300],
  green: green[300],
  pink: pink[300],
  purple: purple[300],
  red: orange[300],
  white: 'white',
  yellow: yellow[300]
}

const PokemonCard = ({
  name,
  coverUrl,
  color,
  genera,
  types,
  openInfo
}) => (
  <Card
    style={{
      backgroundColor: BG_COLORS[color]
    }}
  >
    <div className='pokemon-card'>
      <CardMedia
        image={coverUrl}
        className='pokemon-card-cover'
      />
      <CardContent className='pokemon-card-content'>
        <Typography component='h2' variant='headline'>
          {name}
        </Typography>
        <Typography variant='caption' gutterBottom>
          {genera}
        </Typography>
        <Typography>
          Types: {types.join(', ')}
        </Typography>
      </CardContent>
    </div>
    <CardActions className='pokemon-card-actions'>
      <Button
        size='small'
        color='primary'
        onClick={openInfo}
      >Learn more</Button>
    </CardActions>
  </Card>
)

PokemonCard.propTypes = {
  name: PropTypes.string,
  coverUrl: PropTypes.string.isRequired,
  color: PropTypes.oneOf([
    'black',
    'blue',
    'brown',
    'gray',
    'green',
    'pink',
    'purple',
    'red',
    'white',
    'yellow'
  ]),
  genera: PropTypes.string,
  types: PropTypes.arrayOf(
    PropTypes.string
  ).isRequired,
  openInfo: PropTypes.func
}

export default PokemonCard
