import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Add from '@material-ui/icons/AddRounded'
import ExpandLess from '@material-ui/icons/ExpandLessRounded'
import ExpandMore from '@material-ui/icons/ExpandMoreRounded'
import IconButton from '@material-ui/core/IconButton'

import styles from './ListHeader.styles'

const ListHeader = ({
  classes,
  backgroundColor,
  title,
  expanded,
  toggleCardCreation,
  column
}) => {
  return (
    <Card className={classes.card} style={{ backgroundColor }}>
      <CardContent className={classes.content}>
        <IconButton id={`list-header-expand-${column}`}>
          {expanded ? <ExpandLess /> : <ExpandMore />}
        </IconButton>
        <Typography className={classes.title} variant="title">
          {title}
        </Typography>
        <IconButton
          id={`list-header-add-${column}`}
          className={classes.iconButton}
          onClick={toggleCardCreation}
        >
          <Add className={classes.addIcon} />
        </IconButton>
      </CardContent>
    </Card>
  )
}

ListHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  expanded: PropTypes.bool,
  toggleCardCreation: PropTypes.func.isRequired,
  column: PropTypes.number.isRequired
}

ListHeader.defaultProps = {
  backgroundColor: '#fff',
  expanded: false
}

export default withStyles(styles)(ListHeader)
