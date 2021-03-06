let app

before(async () => {
  process.env.NODE_ENV = 'test'
  process.env.API_URL = 'http://localhost:3100'
  process.env.PORT = 3100
  app = require('../server/app')
})

after(async () => {
  const mongoose = require('mongoose')
  await mongoose.connection.close()

  await app.close()

  process.env.NODE_ENV = 'development'
  process.env.API_URL = 'http://localhost:3000'
  process.env.PORT = 3000
})
