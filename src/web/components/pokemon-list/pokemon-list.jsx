import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import PokemonCard from '../../containers/pokemon-card'
import {
  REQUESTED,
  RECEIVED,
  FAILED
} from '../../helpers/api-storage'

const PokemonList = ({ pokemonList, listStatus }) => (
  listStatus !== FAILED
    ? pokemonList.map(pokemonItem => (
      <Grid item xs={12} sm={6} md={4} lg={3} key={pokemonItem.name}>
        <PokemonCard {...pokemonItem}/>
      </Grid>
    ))
    : <Typography
      variant='title'
      component='h1'
    >API connection error</Typography>
)

PokemonList.propTypes = {
  pokemonList: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired,
  listStatus: PropTypes.oneOf([
    REQUESTED,
    RECEIVED,
    FAILED
  ])
}

export default PokemonList
