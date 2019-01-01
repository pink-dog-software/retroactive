import React from 'react'
import { connect } from 'react-redux'

import CardModal from './CardModal'
import { updateCard } from '../../actions/card'

const Connected = props => {
  return <CardModal {...props} />
}

const mapDispatchToProps = dispatch => {
  return {
    updateCard: card => {
      dispatch(updateCard(card))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Connected)
