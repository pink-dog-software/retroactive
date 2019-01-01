import { expect } from '../helpers/specHelper'
import { cardConstants } from '../../../src/actions/actions.constants'
import { getCompleteCard } from '../helpers/card.factory'

import * as actions from '../../../src/actions/card'

describe('card action creators', () => {
  it('getSuccess returns { type: GET_CARDS, payload: [card1, card2]', () => {
    const card1 = getCompleteCard()
    const card2 = getCompleteCard()

    const { type, payload } = actions.getSuccess([card1, card2])

    expect(type).to.equal(cardConstants.GET_CARDS)
    expect(payload).to.deep.equal([card1, card2])
  })

  it('postSuccess returns { type: POST_CARD, payload: card', () => {
    const card = getCompleteCard()

    const { type, payload } = actions.postSuccess(card)

    expect(type).to.equal(cardConstants.POST_CARD)
    expect(payload).to.deep.equal(card)
  })

  it('putSuccess returns { type: PUT_CARD, payload: card', () => {
    const card = getCompleteCard()

    const { type, payload } = actions.putSuccess(card)

    expect(type).to.equal(cardConstants.PUT_CARD)
    expect(payload).to.deep.equal(card)
  })

  it('failure returns { type: ERROR, payload: error }', () => {
    const error = new Error()
    const { type, payload } = actions.failure(error)

    expect(type).to.equal(cardConstants.ERROR)
    expect(payload).to.deep.equal(error)
  })
})
