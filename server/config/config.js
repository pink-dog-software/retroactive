if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line import/no-extraneous-dependencies
  require('dotenv').load()
}

module.exports = {
  nodeEnv: process.env.NODE_ENV,
  origin: process.env.ORIGIN,
  port: process.env.PORT || 3000,
  seed: process.env.SEED || false,
  dbUri: process.env.DB_URI
}
