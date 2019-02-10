import { cardCreation } from '../actions/actions.constants'

const initialState = [false, false, false]

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case cardCreation.SHOW_ADD:
      return state.map((item, index) => {
        return index === payload ? true : item
      })

    case cardCreation.HIDE_ADD:
      return state.map((item, index) => {
        return index === payload ? false : item
      })

    default:
      return state
  }
}
