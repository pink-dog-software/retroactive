import { combineReducers } from 'redux'
import { utilConstants } from '../actions/actions.constants'
import cardReducer from './card'
import cardCreationReducer from './cardCreation'
import toggleListReducer from './toggleList'
import timerReducer from './timer'

const appReducer = combineReducers({
  cards: cardReducer,
  cardCreation: cardCreationReducer,
  listsExpanded: toggleListReducer,
  timer: timerReducer
})

export default (state, action) => {
  // eslint-disable-next-line no-underscore-dangle
  let _state = { ...state }

  if (action.type === utilConstants.RESET) {
    _state = undefined
  }

  return appReducer(_state, action)
}
