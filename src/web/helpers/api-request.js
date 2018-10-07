const apiRequestAction = (
  type,
  resource,
  id,
  params,
  successAction,
  failedAction
) => ({
  type,
  resource,
  id,
  params,
  successAction,
  failedAction,
  isApiRequest: true
})
const isNotApiRequest = (action) => !action.isApiRequest

module.exports = {
  apiRequestAction,
  isNotApiRequest
}
