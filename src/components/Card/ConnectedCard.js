import React, { Component } from 'react'
import { connect } from 'react-redux'

import Card from './Card'
import { updateCard } from '../../actions/card'

export class Connected extends Component {
  constructor(props) {
    super(props)

    this.state = { open: false }
  }

  toggleCardModal = () => {
    const { open } = this.state
    this.setState({ open: !open })
  }

  render() {
    const { open } = this.state
    const { incrementLikes } = this.props

    return (
      <Card
        {...this.props}
        open={open}
        toggleCardModal={this.toggleCardModal}
        incrementLikes={incrementLikes}
      />
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    incrementLikes: card => {
      dispatch(updateCard({ ...card, likes: card.likes + 1 }))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Connected)
