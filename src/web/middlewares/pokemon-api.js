import axios from 'axios'
import {
  isNotApiRequest
} from '../helpers/api-request'
import {
  REQUEST_POKEMON_LIST,
  REQUEST_POKEMON_ITEM,
  receivePokemonList,
  receivePokemonItem,
  failPokemonList,
  failPokemonItem
} from '../actions/pokemon'

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/'
})

export default store => next => action => {
  if (isNotApiRequest(action)) {
    return next(action)
  }

  switch (action.type) {
    case REQUEST_POKEMON_LIST:
      api
        .get('pokemon/')
        .then(({ data }) => {
          store.dispatch(receivePokemonList(data.results))
        })
        .catch((e) => {
          console.warn(e)
          store.dispatch(failPokemonList())
        })
      break
    case REQUEST_POKEMON_ITEM:
      api
        .get(`pokemon/${action.id}/`)
        .then(({ data }) => {
          const { species } = data
          return axios
            .get(species.url)
            .then(response => ({
              ...data,
              species: {
                ...species,
                ...response.data
              }
            }))
        })
      // Have no time to make a renderer for evolution chain.
      /*
        .then(merged => (
          axios
            .get(
              merged
                .species
                .evolution_chain
                .url
            ).then(({ data }) => ({
              ...merged,
              species: {
                ...merged.species,
                evolution_chain: {
                  ...merged.species.evolution_chain,
                  ...data
                }
              }
            }))
        ))
      */
        .then(merged => {
          store.dispatch(receivePokemonItem(
            merged,
            action.id
          ))
        })
        .catch((e) => {
          console.warn(e)
          store.dispatch(failPokemonItem())
        })
      break
  }
  next(action)
}
