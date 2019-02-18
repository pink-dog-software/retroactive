import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Board from './Board'
import { getCards } from '../../actions/card'

class Connected extends Component {
  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.getCards()
  }

  render() {
    const { cards } = this.props

    return <Board cards={cards} />
  }
}

Connected.propTypes = {
  cards: PropTypes.array.isRequired,
  getCards: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    cards: state.cards.cards
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCards: () => {
      dispatch(getCards())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Connected)
