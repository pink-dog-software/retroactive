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
    console.log('socket timer')
    socket.broadcast.emit(socketConstants.TOCK, timer)
  })
})

server.listen(port, () => console.log(`Server listening on port ${port}`))

module.exports = server
