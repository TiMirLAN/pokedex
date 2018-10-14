import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

const PokemonSearch = ({ query, onSearch, disabled }) => (
  <Grid container spacing={24}>
    <Grid item xs={12} md={4} lg={3}>
      <form
        noValidate
        autoComplete='off'
      >
        <TextField
          label='Search pokemons by name'
          type='search'
          value={query}
          onChange={onSearch}
          disabled={disabled}
          inputProps={{
            className: 'browser-default'
          }}
          fullWidth={true}
          margin='normal'
        />
      </form>
    </Grid>
  </Grid>
)

PokemonSearch.propTypes = {
  query: PropTypes.string,
  onSearch: PropTypes.func,
  disabled: PropTypes.bool
}

export default PokemonSearch
