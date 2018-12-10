import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import ThumbUpIcon from '@material-ui/icons/ThumbUpOutlined'

import CardModal from '../CardModal/CardModal'

const styles = theme => ({
  card: {
    minWidth: 275,
    margin: theme.spacing.unit,
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'space-between'
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

class RetroCard extends Component {
  constructor(props) {
    super(props)

    const { content } = this.props

    this.state = { open: false, content }
  }

  toggleCardModal = () => {
    const { open } = this.state
    this.setState({ open: !open })
  }

  render() {
    const { open, content } = this.state
    const { classes, backgroundColor } = this.props
    const { text, likes } = content

    return (
      <Fragment>
        <Card
          className={classes.card}
          onDoubleClick={this.toggleCardModal}
          style={{ backgroundColor }}
        >
          <CardContent className={classes.content}>
            <Typography variant="body1">{text}</Typography>
          </CardContent>
          <CardActions>
            <Button className={classes.button}>
              <ThumbUpIcon className={classes.icon} />
              <Typography variant="body2" className={classes.likes}>
                {likes}
              </Typography>
            </Button>
          </CardActions>
        </Card>
        <CardModal
          id="modal"
          content={content}
          open={open}
          toggleCardModal={this.toggleCardModal}
        />
      </Fragment>
    )
  }
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
