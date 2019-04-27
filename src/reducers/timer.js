import { timer } from '../actions/actions.constants'

const initialState = { running: false, time: 300 }

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case timer.TICK:
      return { ...state, ...payload }

    default:
      return state
  }
}
