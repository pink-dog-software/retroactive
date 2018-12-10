import React, { Component, Fragment } from 'react'

import Grid from '@material-ui/core/Grid'

import ApiUrl from '../../controllers/api.config'
import colors from '../../constants/colors'
import CardList from '../../Molecules/CardList/CardList'
import RetroCard from '../../Molecules/Card/Card'
import ListHeader from '../../Atoms/ListHeader/ListHeader'

class Board extends Component {
  constructor() {
    super()

    this.state = {
      cards: []
    }
  }

  componentDidMount() {
    fetch(`${ApiUrl}/api/cards`)
      .then(data => {
        return data.json()
      })
      .then(data => {
        if (data.message === 'Not Found') {
          throw new Error('No cards found!!')
        } else this.setState({ cards: data })
      })
      .catch(error => console.log(error))
  }

  render() {
    const { cards } = this.state

    return (
      <Fragment>
        <Grid container>
          <Grid item xs={12} sm={4}>
            <ListHeader
              title="Went Well"
              backgroundColor={colors.paleGreenDark}
            />
            <CardList
              cards={cards.filter(card => card.column === 0)}
              render={(card, index) => {
                return (
                  <RetroCard
                    key={`retro-card-0-${index}`}
                    backgroundColor={colors.paleGreen}
                    content={card}
                  />
                )
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <ListHeader title="Meh" backgroundColor={colors.creamDark} />
            <CardList
              cards={cards.filter(card => card.column === 1)}
              render={(card, index) => {
                return (
                  <RetroCard
                    key={`retro-card-1-${index}`}
                    backgroundColor={colors.cream}
                    content={card}
                  />
                )
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <ListHeader
              title="To Improve"
              backgroundColor={colors.salmonDark}
            />
            <CardList
              cards={cards.filter(card => card.column === 2)}
              render={(card, index) => {
                return (
                  <RetroCard
                    key={`retro-card-2-${index}`}
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
}

export default Board
