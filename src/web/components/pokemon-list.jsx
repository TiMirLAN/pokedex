import React from 'react'
import Grid from '@material-ui/core/Grid'
import PokemonCard from '../containers/pokemon-card'

const PokemonList = ({ pokemonList }) => (
  pokemonList.map(pokemonItem => (
    <Grid item xs={12} sm={6} md={4} lg={3} key={pokemonItem.name}>
      <PokemonCard pokemonItem={pokemonItem}/>
    </Grid>
  ))
)

export default PokemonList
