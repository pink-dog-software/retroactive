import io from 'socket.io-client'
import socketActions from '../server/util/sockets.constants'

import { externalPost, externalPut } from './actions/card'

const socket = io('http://localhost:3000')

export const configureSocket = dispatch => {
  socket.on(socketActions.CARD_ADDED, card => {
    dispatch(externalPost(card))
  })

  socket.on(socketActions.CARD_UPDATED, card => {
    dispatch(externalPut(card))
  })

  return socket
}

export const sendCardToServer = card =>
  socket.emit(socketActions.ADD_CARD, card)

export const updateCardOnServer = card =>
  socket.emit(socketActions.UPDATE_CARD, card)
