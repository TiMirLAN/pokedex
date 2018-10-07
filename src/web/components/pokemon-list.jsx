const React = require('react')
const Grid = require('@material-ui/core/Grid').default
const PokemonCard = require('../containers/pokemon-card')

const PokemonList = ({ pokemonList }) => (
  pokemonList.map(pokemonItem => (
    <Grid item xs={12} sm={6} md={4} lg={3} key={pokemonItem.name}>
      <PokemonCard pokemonItem={pokemonItem}/>
    </Grid>
  ))
)

module.exports = PokemonList
