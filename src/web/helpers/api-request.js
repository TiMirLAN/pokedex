export const apiRequestAction = (
  params
) => ({
  params,
  isApiRequest: true
})

export const isNotApiRequest = (action) => !action.isApiRequest

