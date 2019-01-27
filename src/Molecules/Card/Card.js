import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import ThumbUpIcon from '@material-ui/icons/ThumbUpOutlined'

import ConnectedCardModal from '../CardModal/ConnectedCardModal'

import styles from './Card.styles'

export class RetroCard extends Component {
  constructor(props) {
    super(props)

    this.state = { open: false }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.content !== prevState.content) {
      return {
        content: nextProps.content
      }
    }

    return null
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
          <CardContent>
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
        <ConnectedCardModal
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
