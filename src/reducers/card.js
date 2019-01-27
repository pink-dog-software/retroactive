/* eslint-disable no-underscore-dangle */
import createCard from '../models/card'
import { cardConstants } from '../actions/actions.constants'

const initialState = {
  cards: [],
  error: {}
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case cardConstants.GET_CARDS:
      return {
        ...state,
        cards: payload.map(item => createCard(item)),
        error: {}
      }

    case cardConstants.POST_CARD:
      return { ...state, cards: [...state.cards, payload], error: {} }

    case cardConstants.PUT_CARD:
      return {
        ...state,
        cards: state.cards.map(card => {
          if (card._id === payload._id) {
            return createCard(payload)
          }
          return card
        }),
        error: {}
      }

    case cardConstants.ERROR:
      return { ...state, error: payload }

    default:
      return state
  }
}
