import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Add from '@material-ui/icons/AddRounded'
import Close from '@material-ui/icons/CloseRounded'
import ExpandLess from '@material-ui/icons/ExpandLessRounded'
import ExpandMore from '@material-ui/icons/ExpandMoreRounded'
import IconButton from '@material-ui/core/IconButton'

import { showCardCreation, hideCardCreation } from '../../actions/cardCreation'
import { expandList, collapseList } from '../../actions/toggleList'

import styles from './ListHeader.styles'

export const ListHeader = ({
  classes,
  cardCreation,
  listsExpanded,
  openCardCreation,
  closeCardCreation,
  collapse,
  expand,
  backgroundColor,
  title,
  column
}) => {
  const isCardCreation = cardCreation[column]
  const isExpanded = listsExpanded[column]

  const toggleCardCreation = () => {
    isCardCreation ? closeCardCreation(column) : openCardCreation(column)
  }

  const toggleList = () => {
    isExpanded ? collapse(column) : expand(column)
  }
  return (
    <Card className={classes.card} style={{ backgroundColor }}>
      <CardContent className={classes.content}>
        <IconButton id={`list-header-expand-${column}`} onClick={toggleList}>
          {isExpanded ? (
            <ExpandLess id="expand-less" />
          ) : (
            <ExpandMore id="expand-more" />
          )}
        </IconButton>
        <Typography className={classes.title} variant="title">
          {title}
        </Typography>
        <IconButton
          id={`list-header-add-${column}`}
          className={classes.iconButton}
          onClick={toggleCardCreation}
        >
          {isCardCreation ? (
            <Close id="close-card-creation-icon" className={classes.addIcon} />
          ) : (
            <Add id="add-card-creation-icon" className={classes.addIcon} />
          )}
        </IconButton>
      </CardContent>
    </Card>
  )
}

const mapStateToProps = state => {
  return {
    cardCreation: state.cardCreation,
    listsExpanded: state.listsExpanded
  }
}

const mapDispatchToProps = dispatch => {
  return {
    openCardCreation: column => {
      dispatch(showCardCreation(column))
    },
    closeCardCreation: column => {
      dispatch(hideCardCreation(column))
    },
    expand: column => {
      dispatch(expandList(column))
    },
    collapse: column => dispatch(collapseList(column))
  }
}

ListHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  cardCreation: PropTypes.arrayOf(PropTypes.bool).isRequired,
  listsExpanded: PropTypes.arrayOf(PropTypes.bool).isRequired,
  openCardCreation: PropTypes.func.isRequired,
  closeCardCreation: PropTypes.func.isRequired,
  expand: PropTypes.func.isRequired,
  collapse: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  column: PropTypes.number.isRequired
}

ListHeader.defaultProps = {
  backgroundColor: '#fff'
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ListHeader))
