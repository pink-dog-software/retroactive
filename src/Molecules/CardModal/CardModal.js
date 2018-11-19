import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core/Modal'
import TextField from '@material-ui/core/TextField'
import colors from '../../constants/colors'

const styles = theme => ({
  paper: {
    position: 'absolute',
    boxShadow: theme.shadows[5],
    margin: '4% 7% 7% 7%',
    width: '86%',
    height: '89%',
    padding: theme.spacing.unit * 4,
    borderRadius: '4px'
  },
  label: {
    margin: theme.spacing.unit
  },
  text: {
    margin: theme.spacing.unit,
    backgroundColor: colors.paleGreenLight,
    borderRadius: '4px',
    width: `calc(100% - ${theme.spacing.unit * 2}px)`
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: `${colors.paleGreenDark} !important`,
      borderWidth: '2px'
    },
    color: theme.palette.text.secondary
  },
  cssFocused: {},
  notchedOutline: {
    borderWidth: '0px'
  }
})

class CardModal extends Component {
  constructor(props) {
    super(props)

    const { text, likes } = this.props

    this.state = {
      text,
      likes
    }
  }

  render() {
    const { id, classes, open, toggleCardModal, column } = this.props
    const { text, likes } = this.state
    let backgroundColor

    switch (column) {
      case 0:
        backgroundColor = colors.paleGreen
        break
      case 1:
        backgroundColor = colors.cream
        break
      case 2:
        backgroundColor = colors.salmon
        break
      default:
        backgroundColor = colors.primary
    }

    return (
      <Modal
        id={id}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={toggleCardModal}
      >
        <div className={classes.paper} style={{ backgroundColor }}>
          <Typography className={classes.label} variant="subtitle1" id="likes">
            Likes: {likes}
          </Typography>
          <TextField
            id="outlined-full-width"
            className={classes.text}
            multiline
            rows="4"
            margin="normal"
            variant="outlined"
            value={text}
            InputProps={{
              classes: {
                root: classes.cssOutlinedInput,
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
  text: PropTypes.string,
  likes: PropTypes.number,
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  toggleCardModal: PropTypes.func.isRequired,
  column: PropTypes.number.isRequired
}

CardModal.defaultProps = {
  text: '',
  likes: 0
}

export default withStyles(styles)(CardModal)
