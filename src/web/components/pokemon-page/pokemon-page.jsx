import React from 'react'
import Grid from '@material-ui/core/Grid'
import PokemonList from '../../containers/pokemon-list'
import PokemonPagination from '../../containers/pokemon-pagination'
import PokemonModal from '../../containers/pokemon-modal'
import PokemonSearch from '../../containers/pokemon-search'

const PokemonPage = () => (
  <div className='pokemon-page'>
    <PokemonSearch/>
    <Grid container spacing={24}>
      <PokemonList/>
      <Grid item xs={12}>
        <PokemonPagination/>
      </Grid>
    </Grid>
    <PokemonModal/>
  </div>
)

PokemonPage.propTypes = {}

export default PokemonPage
