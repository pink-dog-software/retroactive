import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ListHeader from './ListHeader'
import { showCardCreation, hideCardCreation } from '../../actions/cardCreation'
import { expandList, collapseList } from '../../actions/toggleList'

const ConnectedListHeader = ({
  cardCreation,
  listsExpanded,
  openCardCreation,
  closeCardCreation,
  expand,
  collapse,
  column,
  ...rest
}) => {
  const toggleCardCreation = () => {
    cardCreation[column] ? closeCardCreation(column) : openCardCreation(column)
  }

  const toggleList = () => {
    listsExpanded[column] ? collapse(column) : expand(column)
  }

  return (
    <ListHeader
      {...rest}
      toggleCardCreation={toggleCardCreation}
      toggleList={toggleList}
      column={column}
      expanded={listsExpanded[column]}
      isCardCreation={cardCreation[column]}
    />
  )
}

const mapStateToProps = state => {
  return {
    cardCreation: state.cardCreation,
    listsExpanded: state.listsExpanded
  }
}

const mapDispatchToProps = dispatch => {
  return {
    openCardCreation: column => {
      dispatch(showCardCreation(column))
    },
    closeCardCreation: column => {
      dispatch(hideCardCreation(column))
    },
    expand: column => {
      dispatch(expandList(column))
    },
    collapse: column => dispatch(collapseList(column))
  }
}

ConnectedListHeader.propTypes = {
  column: PropTypes.number.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedListHeader)
