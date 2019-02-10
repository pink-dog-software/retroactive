import React, { Fragment } from 'react'
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

export const RetroCard = ({
  id,
  classes,
  backgroundColor,
  open,
  content,
  content: { text, likes },
  toggleCardModal,
  incrementLikes
}) => {
  return (
    <Fragment>
      <Card id={id} className={classes.card} style={{ backgroundColor }}>
        <CardContent
          className={classes.content}
          onDoubleClick={toggleCardModal}
        >
          <Typography variant="body1">{text}</Typography>
        </CardContent>
        <CardActions className={classes.actions}>
          <Button
            id={`${id}-likes`}
            className={classes.button}
            onClick={() => {
              incrementLikes(content)
            }}
          >
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
        toggleCardModal={toggleCardModal}
      />
    </Fragment>
  )
}

RetroCard.propTypes = {
  id: PropTypes.string,
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  content: PropTypes.shape({
    text: PropTypes.string,
    likes: PropTypes.number
  }).isRequired,
  toggleCardModal: PropTypes.func.isRequired,
  incrementLikes: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string
}

RetroCard.defaultProps = {
  id: 'retro-card',
  backgroundColor: '#fff'
}

export default withStyles(styles)(RetroCard)
