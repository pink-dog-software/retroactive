import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import ThumbUpIcon from '@material-ui/icons/ThumbUpOutlined'

const styles = theme => ({
  card: {
    minWidth: 275,
    margin: theme.spacing.unit,
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'space-between'
  },
  button: {
    color: theme.palette.text.secondary
  },
  title: {
    fontSize: 18
  },
  content: {},
  icon: {
    fontSize: 18
  },
  likes: {
    paddingLeft: theme.spacing.unit
  }
})

const RetroCard = ({ classes, backgroundColor, content }) => {
  const { text, likes } = content

  return (
    <Card className={classes.card} style={{ backgroundColor }}>
      <CardContent className={classes.content}>
        <Typography variant="body1" color="textSecondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button className={classes.button}>
          <ThumbUpIcon className={classes.icon} />
          <Typography
            variant="body2"
            className={classes.likes}
            color="textSecondary"
          >
            {likes}
          </Typography>
        </Button>
      </CardActions>
    </Card>
  )
}

RetroCard.propTypes = {
  classes: PropTypes.object.isRequired,
  content: PropTypes.shape({
    text: PropTypes.string
  }).isRequired,
  backgroundColor: PropTypes.string
}

RetroCard.defaultProps = {
  backgroundColor: '#fff'
}

export default withStyles(styles)(RetroCard)
