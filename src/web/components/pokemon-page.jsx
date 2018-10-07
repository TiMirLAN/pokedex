const React = require('react')
const Grid = require('@material-ui/core/Grid').default
const PokemonList = require('../containers/pokemon-list')
const PokemonPagination = require('../containers/pokemon-pagination')

const PokemonPage = () => (
  <div>
    <Grid container spacing={24}>
      <PokemonList/>
    </Grid>
    <PokemonPagination/>
  </div>
)

module.exports = PokemonPage
