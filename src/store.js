import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducers/index'
import configureCardSocket from './sockets/card'
import { configureTimerSocket } from './sockets/timer'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export const cardSocket = configureCardSocket(store.dispatch)
export const timerSocket = configureTimerSocket(store.dispatch)

export default store
