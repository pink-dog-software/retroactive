import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core/Modal'
import TextField from '@material-ui/core/TextField'
import Close from '@material-ui/icons/Close'

import IconButton from '../../Atoms/Buttons/IconButton'
import styles, { getColumnClasses } from './CardModal.styles'

class CardModal extends Component {
  constructor(props) {
    super(props)

    const { content } = this.props

    this.state = {
      text: content.text,
      likes: content.likes
    }
  }

  render() {
    const {
      id,
      classes,
      open,
      toggleCardModal,
      content: { column }
    } = this.props
    const { text, likes } = this.state

    const columnClasses = getColumnClasses(column, classes)

    return (
      <Modal
        id={id}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={toggleCardModal}
        onBackdropClick={toggleCardModal}
      >
        <div className={classNames(classes.paper, columnClasses.paper)}>
          <IconButton onClick={toggleCardModal} className={classes.closeButton}>
            <Close style={{ height: '32', width: '32' }} />
          </IconButton>
          <Typography className={classes.label} variant="subtitle1" id="likes">
            Likes: {likes}
          </Typography>
          <TextField
            id="outlined-full-width"
            className={classNames(classes.text, columnClasses.textfield)}
            multiline
            rows="4"
            margin="normal"
            variant="outlined"
            value={text}
            InputProps={{
              classes: {
                root: classNames(
                  classes.cssOutlinedInput,
                  columnClasses.outline
                ),
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline
              }
            }}
          />
        </div>
      </Modal>
    )
  }
}

CardModal.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.shape({
    likes: PropTypes.number,
    text: PropTypes.string,
    column: PropTypes.number
  }),
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  toggleCardModal: PropTypes.func.isRequired
}

CardModal.defaultProps = {
  content: {
    text: '',
    likes: 0,
    column: 0
  }
}

export default withStyles(styles)(CardModal)
