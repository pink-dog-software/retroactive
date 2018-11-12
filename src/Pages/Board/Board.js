import React, { Component, Fragment } from 'react'
import Grid from '@material-ui/core/Grid'

import colors from '../../constants/colors'
import RetroCard from '../../Atoms/Card/Card'
import ListHeader from '../../Atoms/ListHeader/ListHeader'
import CardList from '../../Molecules/CardList/CardList'

class Board extends Component {
  constructor() {
    super()

    this.state = {
      cards: [
        [
          {
            content: {
              text: 'Hello World',
              likes: 12
            }
          },
          {
            content: {
              text: 'Goodbye World',
              likes: 4
            }
          }
        ],
        [
          {
            content: {
              text: 'Hello Earth',
              likes: 3
            }
          }
        ],
        [
          {
            content: {
              text: 'Hello Terra',
              likes: 0
            }
          }
        ]
      ]
    }
  }

  render() {
    const { cards } = this.state

    return (
      <Fragment>
        <Grid container>
          <Grid item xs={12} sm={4}>
            <ListHeader title="Went Well" backgroundColor={colors.paleGreen} />
            <CardList
              cards={cards[0]}
              render={(card, index) => {
                const { content } = card
                return (
                  <RetroCard
                    key={`retro-card-0-${index}`}
                    backgroundColor={colors.paleGreen}
                    content={content}
                  />
                )
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <ListHeader title="Meh" backgroundColor={colors.secondaryDark} />
            <CardList
              cards={cards[1]}
              render={(card, index) => {
                const { content } = card
                return (
                  <RetroCard
                    key={`retro-card-1-${index}`}
                    backgroundColor={colors.secondary}
                    content={content}
                  />
                )
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <ListHeader title="To Improve" backgroundColor={colors.salmon} />
            <CardList
              cards={cards[2]}
              render={(card, index) => {
                const { content } = card
                return (
                  <RetroCard
                    key={`retro-card-2-${index}`}
                    backgroundColor={colors.salmon}
                    content={content}
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
