const mongoose = require('mongoose')

const { Schema } = mongoose

const CardSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    required: true
  },
  column: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('card', CardSchema)
