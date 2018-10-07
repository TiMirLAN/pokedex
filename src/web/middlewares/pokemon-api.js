const axios = require('axios')
const {
  isNotApiRequest
} = require('../helpers/api-request')

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/'
})

module.exports = store => next => action => {
  if (isNotApiRequest(action)) {
    return next(action)
  }

  const { resource, id, params, successAction, failedAction } = action
  const path = `${resource}/${id || ''}`

  api
    .get(path, { params })
    .then(({ data }) => {
      store.dispatch(successAction(data.results))
    })
    .catch(() => { store.dispatch(failedAction()) })
  next(action)
}
