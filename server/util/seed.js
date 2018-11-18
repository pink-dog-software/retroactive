const merge = require('lodash/merge')
const Card = require('../api/card/cardModel')

const cards = [
  { text: 'this is the 1 card', likes: 0, column: 0 },
  { text: 'this is the 2 card', likes: 1, column: 1 },
  { text: 'this is the 3 card', likes: 2, column: 2 },
  { text: 'this is the 4 card', likes: 3, column: 0 },
  { text: 'this is the 5 card', likes: 4, column: 1 },
  { text: 'this is the 6 card', likes: 5, column: 2 },
  { text: 'this is the 7 card', likes: 6, column: 0 }
]

const createDoc = (Model, doc) => {
  return new Promise((resolve, reject) => {
    new Model(doc).save((err, saved) => {
      return err ? reject(err) : resolve(saved)
    })
  })
}

const cleanDB = () => {
  const cleanPromises = [Card].map(model => {
    return model.deleteMany({}).exec()
  })
  return Promise.all(cleanPromises)
}

const createCards = data => {
  const promises = cards.map(card => {
    return createDoc(Card, card)
  })

  return Promise.all(promises).then(createdCards => {
    return merge({ cards: createdCards }, data || {})
  })
}

cleanDB().then(createCards)
