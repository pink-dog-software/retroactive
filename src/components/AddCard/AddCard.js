import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classNames from 'classnames'

import { withStyles } from '@material-ui/core/styles'
import Collapse from '@material-ui/core/Collapse'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import { createCard } from '../../actions/card'
import { hideCardCreation } from '../../actions/cardCreation'
import { newCard } from '../../models/card'
import styles, { getColumnClasses } from './AddCard.styles'

export const AddCard = ({
  classes,
  backgroundColor,
  column,
  cardCreation,
  saveCard,
  closeCardCreation
}) => {
  const columnClasses = getColumnClasses(column, classes)

  const isVisible = cardCreation[column]

  const [text, handleChange] = useState('')

  return (
    <Collapse in={isVisible}>
      <Card
        id={`add-card-${column}`}
        className={classes.card}
        style={{ backgroundColor }}
      >
        <CardContent className={classes.content}>
          <TextField
            id={`add-card-text-${column}`}
            name="text"
            className={classNames(classes.text, columnClasses.textfield)}
            multiline
            rows="2"
            margin="normal"
            variant="outlined"
            value={text}
            onChange={e => handleChange(e.target.value)}
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
        </CardContent>
        <CardActions className={classes.actions}>
          <Button
            id={`add-card-clear-button-${column}`}
            onClick={() => handleChange('')}
          >
            Clear
          </Button>
          <Button
            id={`add-card-save-button-${column}`}
            onClick={() => {
              handleChange('')
              saveCard(newCard(text, column))
              closeCardCreation(column)
            }}
            variant="outlined"
          >
            Save
          </Button>
        </CardActions>
      </Card>
    </Collapse>
  )
}

const mapStateToProps = state => {
  return {
    cardCreation: state.cardCreation
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveCard: card => dispatch(createCard(card)),
    closeCardCreation: column => dispatch(hideCardCreation(column))
  }
}

AddCard.propTypes = {
  classes: PropTypes.object.isRequired,
  backgroundColor: PropTypes.string,
  column: PropTypes.number.isRequired,
  cardCreation: PropTypes.arrayOf(PropTypes.bool).isRequired,
  saveCard: PropTypes.func.isRequired,
  closeCardCreation: PropTypes.func.isRequired
}

AddCard.defaultProps = {
  backgroundColor: '#fff'
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(AddCard))
