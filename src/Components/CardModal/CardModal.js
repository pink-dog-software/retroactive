import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Modal from '@material-ui/core/Modal'
import IconButton from '@material-ui/core/IconButton'
import Close from '@material-ui/icons/Close'
import Button from '@material-ui/core/Button'

import styles, { getColumnClasses } from './CardModal.styles'

export const CardModal = ({
  id,
  classes,
  open,
  toggleCardModal,
  content: { column },
  content,
  updateCard,
  text,
  likes,
  handleFormChange
}) => {
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
          name="text"
          className={classNames(classes.text, columnClasses.textfield)}
          multiline
          rows="4"
          margin="normal"
          variant="outlined"
          value={text}
          onChange={handleFormChange}
          InputProps={{
            classes: {
              root: classNames(classes.cssOutlinedInput, columnClasses.outline),
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline
            }
          }}
        />
        <Button
          id={`${id}-save-button`}
          className={classes.saveTextButton}
          onClick={() => updateCard({ ...content, text })}
        >
          Save
        </Button>
      </div>
    </Modal>
  )
}

CardModal.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.shape({
    column: PropTypes.number
  }),
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  toggleCardModal: PropTypes.func.isRequired,
  updateCard: PropTypes.func.isRequired,
  handleFormChange: PropTypes.func.isRequired,
  likes: PropTypes.number,
  text: PropTypes.string
}

CardModal.defaultProps = {
  content: {
    column: 0
  },
  text: '',
  likes: 0
}

export default withStyles(styles)(CardModal)
