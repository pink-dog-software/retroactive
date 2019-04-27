import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import updateTimer from '../../sockets/timer'

const formatTime = time => {
  const seconds = Math.floor(time % 60)
  const minutes = Math.floor((time / 60) % 60)

  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds

  return `${minutes}:${formattedSeconds}`
}

export const Timer = ({ timer: { time, running }, timer }) => {
  console.log('timer: ', timer)
  console.log('timeProps: ', time)

  return (
    <div>
      <h3>{formatTime(time)}</h3>
      <Button
        onClick={() => {
          updateTimer({ running: !running, id: 0, increment: 0, reset: false })
        }}
      >
        {running ? 'Pause' : 'Start'}
      </Button>
      <Button
        onClick={() => {
          updateTimer({ running, id: 0, increment: 60, reset: false })
        }}
      >
        Add Time
      </Button>
      <Button
        onClick={() => {
          updateTimer({ running: false, id: 0, increment: 0, reset: true })
        }}
      >
        Reset
      </Button>
    </div>
  )
}

Timer.propTypes = {
  timer: PropTypes.shape({
    running: PropTypes.bool,
    start: PropTypes.number
  }).isRequired
}

const mapStateToProps = state => {
  return {
    timer: state.timer
  }
}

export default connect(mapStateToProps)(Timer)
