/* eslint-disable no-console */
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const { port, dbUri, seed } = require('./config/config')
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

app.use('/api', api)

const server = app.listen(port, () => {
  const host = server.address().address

  console.log(`App listening at http://${host}:${port}`)
})

module.exports = server
