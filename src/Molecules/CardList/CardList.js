import React from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List'

const CardList = ({ render, cards }) => {
  return <List>{cards.map((card, index) => render(card, index))}</List>
}

CardList.propTypes = {
  render: PropTypes.func.isRequired,
  cards: PropTypes.array.isRequired
}

export default CardList
