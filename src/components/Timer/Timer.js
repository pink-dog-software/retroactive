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

export const Timer = ({
  timer: { time: timeProps, running: runningProps },
  timer
}) => {
  const [time, setTime] = useState(timeProps)
  const [running, setRunning] = useState(runningProps)

  console.log('time: ', time)
  console.log('timeProps: ', timeProps)

  useEffect(() => {
    const timeout =
      running &&
      setTimeout(() => {
        setTime(time - 1)
      }, 1000)

    return () => clearTimeout(timeout)
  }, [time, running])

  useEffect(() => {
    setTime(timeProps)
  }, [timeProps])

  useEffect(() => {
    setRunning(runningProps)
  }, [runningProps])

  return (
    <div>
      <h3>{formatTime(time)}</h3>
      <Button
        onClick={() => {
          setRunning(!running)
          updateTimer({ time, running: !running })
        }}
      >
        {running ? 'Pause' : 'Start'}
      </Button>
      <Button
        onClick={() => {
          setTime(time + 60)
          updateTimer({ time: time + 60, running })
        }}
      >
        Add Time
      </Button>
      <Button
        onClick={() => {
          setTime(300)
          setRunning(false)
          updateTimer({ time: 300, running: false })
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
