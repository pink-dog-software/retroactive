/* eslint-disable no-console */
const express = require('express')
const cors = require('cors')
const path = require('path')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const http = require('http')
const socketIO = require('socket.io')

const { port, dbUri, seed } = require('./config/config')
const socketConstants = require('./util/sockets.constants')
const api = require('./api/api')

mongoose.connect(dbUri)

if (seed) require('./util/seed')

const app = express()

app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

app.use(bodyParser.json())

app.use(helmet())

app.use(cors())

app.use('/', express.static(path.join(__dirname, '../dist')))

app.use('/api', api)

const server = http.createServer(app)

const io = socketIO(server)

io.on('connection', socket => {
  console.log('======> Connected')

  socket.on(socketConstants.ADD_CARD, card => {
    socket.broadcast.emit(socketConstants.CARD_ADDED, card)
  })

  socket.on(socketConstants.UPDATE_CARD, card => {
    socket.broadcast.emit(socketConstants.CARD_UPDATED, card)
  })

  socket.on(socketConstants.TICK, timer => {
    // socket.broadcast.emit(socketConstants.TOCK, timer)
    const emit = newTimer => io.emit(socketConstants.TOCK, newTimer)

    const setTimer = (cardId, running, time) => ({
      id: cardId,
      running,
      time
    })

    let interval
    let time = 300

    if (timer.running && timer.increment === 0) {
      console.log('start')
      interval = setInterval(() => {
        time -= 1
        emit(setTimer(timer.id, true, time))
      }, 1000)
    } else if (!timer.running && !timer.reset) {
      console.log('stop')

      clearInterval(interval)
      emit(setTimer(timer.id, false, time))
    } else if (timer.increment > 0) {
      console.log('add')

      time += timer.increment
      emit(setTimer(timer.id, timer.running, time))
    } else {
      console.log('reset')

      time = 300
      clearInterval(interval)
      emit(setTimer(timer.id, false, time))
    }
  })
})

server.listen(port, () => console.log(`Server listening on port ${port}`))

module.exports = server
