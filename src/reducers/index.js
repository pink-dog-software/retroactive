import { combineReducers } from 'redux'
import { utilConstants } from '../actions/actions.constants'
import cardReducer from './card'

const appReducer = combineReducers({
  cards: cardReducer
})

export default (state, action) => {
  // eslint-disable-next-line no-underscore-dangle
  let _state = { ...state }

  if (action.type === utilConstants.RESET) {
    _state = undefined
  }

  return appReducer(_state, action)
}
