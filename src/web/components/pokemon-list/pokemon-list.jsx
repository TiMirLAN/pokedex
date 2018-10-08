import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import PokemonCard from '../../containers/pokemon-card'

const PokemonList = ({ pokemonList }) => (
  pokemonList.map(pokemonItem => (
    <Grid item xs={12} sm={6} md={4} lg={3} key={pokemonItem.name}>
      <PokemonCard {...pokemonItem}/>
    </Grid>
  ))
)

PokemonList.propTypes = {
  pokemonList: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired
}

export default PokemonList
