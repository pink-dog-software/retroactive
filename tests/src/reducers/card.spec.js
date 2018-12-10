import { expect } from '../helpers/specHelper'
import cardReducer from '../../../src/reducers/card'
import * as actions from '../../../src/actions/card'
import { getCompleteCard } from '../helpers/card.factory'

describe('card reducer', () => {
  let dummyState

  beforeEach(() => {
    dummyState = { cards: [], error: {} }
  })

  it('GET_CARDS', () => {
    const card = getCompleteCard()
    const { cards, error } = cardReducer(dummyState, actions.getSuccess(card))

    expect(cards).to.deep.equal(card)
    expect(error).to.deep.equal({})
  })

  it('ERROR', () => {
    const thrown = new Error()
    const { cards, error } = cardReducer(dummyState, actions.getFailure(thrown))

    expect(cards).to.deep.equal([])
    expect(error).to.deep.equal(thrown)
  })
})
