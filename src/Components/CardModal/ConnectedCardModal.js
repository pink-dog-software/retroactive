import React, { Component } from 'react'
import { connect } from 'react-redux'

import CardModal from './CardModal'
import { updateCard } from '../../actions/card'

export class Connected extends Component {
  constructor(props) {
    super(props)

    const { content } = this.props

    this.state = {
      text: content.text,
      likes: content.likes
    }
  }

  handleFormChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { text, likes } = this.state
    return (
      <CardModal
        {...this.props}
        text={text}
        likes={likes}
        handleFormChange={this.handleFormChange}
      />
    )
  }
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
