import { timer } from './actions.constants'

export default payload => {
  return {
    type: timer.TICK,
    payload
  }
}
