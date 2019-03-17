import { toggleList } from '../actions/actions.constants'

const initialState = [true, true, true]

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case toggleList.SHOW_LIST:
      return state.map((item, index) => {
        return index === payload ? true : item
      })

    case toggleList.HIDE_LIST:
      return state.map((item, index) => {
        return index === payload ? false : item
      })

    default:
      return state
  }
}
