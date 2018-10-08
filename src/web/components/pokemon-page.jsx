import React from 'react'
import Grid from '@material-ui/core/Grid'
import PokemonList from '../containers/pokemon-list'
import PokemonPagination from '../containers/pokemon-pagination'

const PokemonPage = () => (
  <div>
    <Grid container spacing={24}>
      <PokemonList/>
      <Grid item xs={12}>
        <PokemonPagination/>
      </Grid>
    </Grid>
  </div>
)

export default PokemonPage
