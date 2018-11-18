const router = require('express').Router()

router.use('/cards', require('./card/cardRoutes'))

module.exports = router
