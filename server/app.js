/* eslint-disable no-console */
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000

app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

app.use(bodyParser.json())

app.use(helmet())

app.use(cors())

const server = app.listen(port, () => {
  const host = server.address().address

  console.log(`App listening at http://${host}:${port}`)
})

module.exports = server
