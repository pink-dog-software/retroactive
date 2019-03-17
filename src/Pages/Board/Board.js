/* eslint-disable no-underscore-dangle */
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'
import Collapse from '@material-ui/core/Collapse'

import CardList from '../../components/CardList/CardList'
import RetroCard from '../../components/Card/ConnectedCard'
import ListHeader from '../../components/ListHeader/ConnectedListHeader'

import colors from '../../constants/colors'
import AddCard from '../../components/AddCard/ConnectedAddCard'

const Board = ({ cards, listsExpanded }) => {
  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12} md={4}>
          <ListHeader
            title="Went Well"
            backgroundColor={colors.paleGreenDark}
            column={0}
          />
          <AddCard column={0} backgroundColor={colors.paleGreenDark} />
          <Collapse in={listsExpanded[0]}>
            <CardList
              cards={cards.filter(card => card.column === 0)}
              render={(card, index) => {
                return (
                  <RetroCard
                    id={`retro-card-0-${index}`}
                    key={card._id}
                    backgroundColor={colors.paleGreen}
                    content={card}
                  />
                )
              }}
            />
          </Collapse>
        </Grid>
        <Grid item xs={12} md={4}>
          <ListHeader
            title="Meh"
            backgroundColor={colors.creamDark}
            column={1}
          />
          <AddCard column={1} backgroundColor={colors.creamDark} />
          <Collapse in={listsExpanded[1]}>
            <CardList
              cards={cards.filter(card => card.column === 1)}
              render={(card, index) => {
                return (
                  <RetroCard
                    id={`retro-card-1-${index}`}
                    key={card._id}
                    backgroundColor={colors.cream}
                    content={card}
                  />
                )
              }}
            />
          </Collapse>
        </Grid>
        <Grid item xs={12} md={4}>
          <ListHeader
            title="To Improve"
            backgroundColor={colors.salmonDark}
            column={2}
          />
          <AddCard column={2} backgroundColor={colors.salmonDark} />
          <Collapse in={listsExpanded[2]}>
            <CardList
              cards={cards.filter(card => card.column === 2)}
              render={(card, index) => {
                return (
                  <RetroCard
                    id={`retro-card-2-${index}`}
                    key={card._id}
                    backgroundColor={colors.salmon}
                    content={card}
                  />
                )
              }}
            />
          </Collapse>
        </Grid>
      </Grid>
    </Fragment>
  )
}

Board.propTypes = {
  cards: PropTypes.array.isRequired,
  listsExpanded: PropTypes.arrayOf(PropTypes.bool).isRequired
}

export default Board
