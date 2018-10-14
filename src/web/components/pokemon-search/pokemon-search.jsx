import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'

const PokemonSearch = ({ query, onSearch, disabled }) => (
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
    />
  </form>
)

PokemonSearch.propTypes = {
  query: PropTypes.string,
  onSearch: PropTypes.func,
  disabled: PropTypes.bool
}

export default PokemonSearch
