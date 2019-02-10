import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ListHeader from './ListHeader'
import { showCardCreation, hideCardCreation } from '../../actions/cardCreation'

const ConnectedListHeader = ({
  cardCreation,
  openCardCreation,
  closeCardCreation,
  column,
  ...rest
}) => {
  const toggleCardCreation = () => {
    cardCreation[column] === true
      ? closeCardCreation(column)
      : openCardCreation(column)
  }
  return (
    <ListHeader
      {...rest}
      toggleCardCreation={toggleCardCreation}
      column={column}
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
    openCardCreation: column => {
      dispatch(showCardCreation(column))
    },
    closeCardCreation: column => {
      dispatch(hideCardCreation(column))
    }
  }
}

ConnectedListHeader.propTypes = {
  column: PropTypes.number.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedListHeader)
