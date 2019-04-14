import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import ThumbUpIcon from '@material-ui/icons/ThumbUpOutlined'

import CardModal from '../CardModal'
import { updateCard } from '../../actions/card'

import styles from './Card.styles'

export const RetroCard = ({
  id,
  classes,
  backgroundColor,
  content,
  content: { text, likes },
  incrementLikes
}) => {
  const [open, toggleCardModal] = useState(false)

  return (
    <>
      <Card id={id} className={classes.card} style={{ backgroundColor }}>
        <CardContent
          className={classes.content}
          onDoubleClick={() => toggleCardModal(!open)}
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
      <CardModal
        id="modal"
        content={content}
        open={open}
        toggleCardModal={() => toggleCardModal(!open)}
      />
    </>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    incrementLikes: card => {
      dispatch(updateCard({ ...card, likes: card.likes + 1 }))
    }
  }
}

RetroCard.propTypes = {
  id: PropTypes.string,
  classes: PropTypes.object.isRequired,
  content: PropTypes.shape({
    text: PropTypes.string,
    likes: PropTypes.number
  }).isRequired,
  incrementLikes: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string
}

RetroCard.defaultProps = {
  id: 'retro-card',
  backgroundColor: '#fff'
}

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(RetroCard))
