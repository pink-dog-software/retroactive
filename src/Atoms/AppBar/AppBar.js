import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import colors from '../../constants/colors'

const styles = {
  appBar: {
    backgroundColor: colors.primary
  }
}

const AppHeader = ({ classes, title }) => {
  return (
    <AppBar className={classes.appBar} position="sticky">
      <Toolbar>
        <Typography variant="h5" color="textSecondary">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

AppHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string
}

AppHeader.defaultProps = {
  title: 'Retroactive'
}

export default withStyles(styles)(AppHeader)
