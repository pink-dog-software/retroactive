import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  title: {
    minWidth: 275,
    margin: theme.spacing.unit,
    marginBottom: 0,
    textAlign: 'center'
  },
  content: {
    padding: theme.spacing.unit * 3
  }
})

const ListHeader = ({ classes, backgroundColor, title }) => {
  return (
    <Card className={classes.title} style={{ backgroundColor }}>
      <CardContent className={classes.content}>
        <Typography variant="title" color="textSecondary">
          {title}
        </Typography>
      </CardContent>
    </Card>
  )
}

ListHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string
}

ListHeader.defaultProps = {
  backgroundColor: '#fff'
}

export default withStyles(styles)(ListHeader)
