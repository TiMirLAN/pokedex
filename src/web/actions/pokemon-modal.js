export const OPEN_MODAL = 'OPEN_MODAL'
export const CLOSE_MODAL = 'CLOSE_MODAL'

export const openModal = (pokemonId) => ({ type: OPEN_MODAL, pokemonId })
export const closeModal = () => ({ type: CLOSE_MODAL })
