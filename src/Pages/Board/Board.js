import React, { Component, Fragment } from 'react'
import Grid from '@material-ui/core/Grid'

import ApiUrl from '../../controllers/api.config'
import colors from '../../constants/colors'
import RetroCard from '../../Atoms/Card/Card'
import ListHeader from '../../Atoms/ListHeader/ListHeader'
import CardList from '../../Molecules/CardList/CardList'
import CardModal from '../../Molecules/CardModal/CardModal'

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
        <CardModal
          id="modal"
          text="some text"
          likes={3}
          open
          toggleCardModal={() => console.log('toggle modal')}
          column={0}
        />
        <Grid container>
          <Grid item xs={12} sm={4}>
            <ListHeader
              title="Went Well"
              backgroundColor={colors.paleGreenDark}
            />
            <CardList
              cards={cards.filter(card => card.column === 0)}
              render={(card, index) => {
                const { text, likes } = card
                return (
                  <RetroCard
                    key={`retro-card-0-${index}`}
                    backgroundColor={colors.paleGreen}
                    content={{ text, likes }}
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
                const { text, likes } = card
                return (
                  <RetroCard
                    key={`retro-card-1-${index}`}
                    backgroundColor={colors.cream}
                    content={{ text, likes }}
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
                const { text, likes } = card
                return (
                  <RetroCard
                    key={`retro-card-2-${index}`}
                    backgroundColor={colors.salmon}
                    content={{ text, likes }}
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
