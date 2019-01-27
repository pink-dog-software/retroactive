import { Factory } from 'rosie'
import mongoose from 'mongoose'

Factory.define('completeCard')
  .attr('_id', () => mongoose.Types.ObjectId().toHexString())
  .attr('text', 'dummy text')
  .attr('likes', () => Math.floor(Math.random() * 100))
  .attr('column', () => Math.floor(Math.random() * 2))

Factory.define('unsavedCard')
  .attr('text', 'dummy text')
  .attr('likes', () => Math.floor(Math.random() * 100))
  .attr('column', () => Math.floor(Math.random() * 2))

const getCompleteCard = changes => {
  return Factory.build('completeCard', changes)
}

const getUnsavedCard = changes => {
  return Factory.build('unsavedCard', changes)
}

export { getCompleteCard, getUnsavedCard }
