import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const AppHeader = ({ title }) => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h5">{title}</Typography>
      </Toolbar>
    </AppBar>
  )
}

AppHeader.propTypes = {
  title: PropTypes.string
}

AppHeader.defaultProps = {
  title: 'Retroactive'
}

export default AppHeader
