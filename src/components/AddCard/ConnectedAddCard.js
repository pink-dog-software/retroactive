import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import AddCard from './AddCard'
import { createCard } from '../../actions/card'
import { hideCardCreation } from '../../actions/cardCreation'

const ConnectedAddCard = ({
  cardCreation,
  column,
  saveCard,
  closeCardCreation,
  ...rest
}) => {
  return (
    <AddCard
      {...rest}
      column={column}
      isVisible={cardCreation[column]}
      saveCard={card => {
        saveCard(card)
        closeCardCreation(column)
      }}
    />
  )
}

const mapStateToProps = state => {
  return {
    cardCreation: state.cardCreation
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveCard: card => dispatch(createCard(card)),
    closeCardCreation: column => dispatch(hideCardCreation(column))
  }
}

ConnectedAddCard.propTypes = {
  column: PropTypes.number.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedAddCard)
