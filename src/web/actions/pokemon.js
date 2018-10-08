import {
  apiRequestAction
} from '../helpers/api-request'

export const REQUEST_POKEMON_LIST = 'REQUEST_POKEMON_LIST'
export const RECEIVE_POKEMON_LIST = 'RECEIVE_POKEMON_LIST'
export const FAIL_POKEMON_LIST = 'FAIL_POKEMON_LIST'
export const REQUEST_POKEMON_ITEM = 'REQUEST_POKEMON_ITEM'
export const RECEIVE_POKEMON_ITEM = 'RECEIVE_POKEMON_ITEM'
export const FAIL_POKEMON_ITEM = 'FAIL_POKEMON_ITEM'

export const receivePokemonList = list => ({
  type: RECEIVE_POKEMON_LIST,
  list
})

export const failPokemonList = () => ({ type: FAIL_POKEMON_LIST })

export const requestPokemonList = () => ({
  ...apiRequestAction(),
  type: REQUEST_POKEMON_LIST
})

export const receivePokemonItem = (item, id) => ({
  type: RECEIVE_POKEMON_ITEM,
  item,
  id
})

export const failPokemonItem = () => ({ type: FAIL_POKEMON_ITEM })

export const requestPokemonItem = (id) => ({
  ...apiRequestAction(),
  type: REQUEST_POKEMON_ITEM,
  id
})
