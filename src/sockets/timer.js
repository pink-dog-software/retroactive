import socket from './setup'
import socketActions from '../../server/util/sockets.constants'
import updateTimer from '../actions/timer'

export const configureTimerSocket = dispatch => {
  socket.on(socketActions.TOCK, timer => {
    dispatch(updateTimer(timer))
  })

  return socket
}

export default timer => socket.emit(socketActions.TICK, timer)
