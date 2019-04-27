import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const formatTime = time => {
  const seconds = Math.floor(time % 60)
  const minutes = Math.floor((time / 60) % 60)

  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds

  return `${minutes}:${formattedSeconds}`
}

export const Timer = () => {
  const [time, setTime] = useState(300)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    const timer =
      running &&
      setTimeout(() => {
        setTime(time - 1)
      }, 1000)

    return () => clearTimeout(timer)
  }, [time, running])

  return (
    <div>
      <h3>{formatTime(time)}</h3>
      <Button onClick={() => setRunning(!running)}>
        {running ? 'Pause' : 'Start'}
      </Button>
      <Button onClick={() => setTime(time + 60)}>Add Time</Button>
      <Button
        onClick={() => {
          setTime(300)
          setRunning(false)
        }}
      >
        Reset
      </Button>
    </div>
  )
}

export default Timer
