import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducers/index'
import { configureSocket } from './socket'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export const socket = configureSocket(store.dispatch)

export default store
