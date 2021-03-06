/* eslint-disable no-underscore-dangle */
export default card => {
  if (
    typeof card._id !== 'string' ||
    typeof card.text !== 'string' ||
    typeof card.likes !== 'number' ||
    typeof card.column !== 'number'
  ) {
    throw new TypeError('Card Object missing required fields')
  }
  return {
    _id: card._id,
    text: card.text,
    likes: card.likes,
    column: card.column
  }
}

export const newCard = (text, column) => {
  if (typeof text !== 'string' || typeof column !== 'number') {
    throw new TypeError('New Card Object missing required fields')
  }
  return {
    text,
    column,
    likes: 0
  }
}
