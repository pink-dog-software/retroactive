import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import AddCard from './AddCard'
import { createCard } from '../../actions/card'

const ConnectedAddCard = ({ cardCreation, column, saveCard, ...rest }) => {
  return (
    <AddCard
      {...rest}
      column={column}
      isVisible={cardCreation[column]}
      saveCard={saveCard}
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
    saveCard: card => dispatch(createCard(card))
  }
}

ConnectedAddCard.propTypes = {
  column: PropTypes.number.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedAddCard)
