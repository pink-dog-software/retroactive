import { cardConstants } from '../actions/actions.constants'

const initialState = {
  cards: [],
  error: {}
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case cardConstants.GET_CARDS:
      return { ...state, cards: payload, error: {} }
    case cardConstants.ERROR:
      return { ...state, error: payload, cards: [] }

    default:
      return state
  }
}
