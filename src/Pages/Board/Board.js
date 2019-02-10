/* eslint-disable no-underscore-dangle */
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'

import CardList from '../../Components/CardList/CardList'
import RetroCard from '../../Components/Card/ConnectedCard'
import ListHeader from '../../Components/ListHeader/ConnectedListHeader'

import colors from '../../constants/colors'
import AddCard from '../../Components/AddCard/ConnectedAddCard'

const Board = ({ cards }) => {
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
        </Grid>
        <Grid item xs={12} md={4}>
          <ListHeader
            title="Meh"
            backgroundColor={colors.creamDark}
            column={1}
          />
          <AddCard column={1} backgroundColor={colors.creamDark} />
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
        </Grid>
        <Grid item xs={12} md={4}>
          <ListHeader
            title="To Improve"
            backgroundColor={colors.salmonDark}
            column={2}
          />
          <AddCard column={2} backgroundColor={colors.salmonDark} />
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
        </Grid>
      </Grid>
    </Fragment>
  )
}

Board.propTypes = {
  cards: PropTypes.array.isRequired
}

export default Board
