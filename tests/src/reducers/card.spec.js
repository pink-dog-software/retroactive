import { expect } from '../helpers/specHelper'
import cardReducer from '../../../src/reducers/card'
import * as actions from '../../../src/actions/card'
import { getCompleteCard } from '../helpers/card.factory'

describe('card reducer', () => {
  const dummyCard = getCompleteCard()
  let dummyState

  beforeEach(() => {
    dummyState = { cards: [dummyCard], error: {} }
  })

  it('GET_CARDS', () => {
    const card = [getCompleteCard()]
    const { cards, error } = cardReducer(dummyState, actions.getSuccess(card))

    expect(cards).to.deep.equal(card)
    expect(error).to.deep.equal({})
  })

  it('POST_CARD', () => {
    const card = getCompleteCard()
    const { cards, error } = cardReducer(dummyState, actions.postSuccess(card))

    expect(cards).to.deep.equal([dummyCard, card])
    expect(error).to.deep.equal({})
  })

  it('PUT_CARD', () => {
    const update = { ...dummyCard, text: 'update' }
    const { cards, error } = cardReducer(dummyState, actions.putSuccess(update))

    expect(cards).to.deep.equal([update])
    expect(error).to.deep.equal({})
  })

  it('ERROR', () => {
    const thrown = new Error()
    const { cards, error } = cardReducer(dummyState, actions.failure(thrown))

    expect(cards).to.deep.equal([dummyCard])
    expect(error).to.deep.equal(thrown)
  })
})
