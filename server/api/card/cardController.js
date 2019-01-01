const merge = require('lodash/merge')
const Card = require('./cardModel')

exports.params = (req, res, next, id) => {
  Card.findById(id).then(
    card => {
      if (!card) {
        next(new Error('no card with that id'))
      } else {
        req.card = card
        next()
      }
    },
    err => {
      res.status(400).json(err)
    }
  )
}

exports.post = (req, res) => {
  const { body } = req

  Card.create(body.card).then(
    card => {
      res.status(200).json(card)
    },
    err => {
      res.status(400).json(err)
    }
  )
}

exports.get = (req, res) => {
  Card.find({}).then(
    cards => {
      res.status(200).json(cards)
    },
    err => {
      res.status(400).json(err)
    }
  )
}

exports.put = (req, res) => {
  const { card } = req

  const { body } = req

  merge(card, body.card)

  card.save((err, saved) => {
    if (err) {
      res.status(400).json(err)
    } else {
      res.json(saved)
    }
  })
}

exports.delete = (req, res) => {
  req.card.remove((err, removed) => {
    if (err) {
      res.status(400).json(err)
    } else {
      res.status(200).json(removed)
    }
  })
}
