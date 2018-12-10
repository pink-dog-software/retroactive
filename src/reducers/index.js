import { combineReducers } from 'redux'
import cardReducer from './card'

export default combineReducers({ cards: cardReducer })
