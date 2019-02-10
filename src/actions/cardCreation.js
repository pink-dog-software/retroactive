import { cardCreation } from './actions.constants'

export const showCardCreation = payload => {
  return {
    type: cardCreation.SHOW_ADD,
    payload
  }
}

export const hideCardCreation = payload => {
  return {
    type: cardCreation.HIDE_ADD,
    payload
  }
}
