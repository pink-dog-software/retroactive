import { expect } from '../helpers/specHelper'
import rootReducer from '../../../src/reducers/index'
import reset from '../../../src/actions/util'

describe('root reducer', () => {
  let dummyState

  beforeEach(() => {
    dummyState = { cards: { cards: ['1', '2'], error: { error: 'error' } } }
  })

  it('RESETS', () => {
    const {
      cards: { cards, error }
    } = rootReducer(dummyState, reset())

    expect(cards).to.deep.equal([])
    expect(error).to.deep.equal({})
  })

  it('Any other action', () => {
    const {
      cards: { cards, error }
    } = rootReducer(dummyState, { type: 'TEST' })

    expect(cards).to.deep.equal(['1', '2'])
    expect(error).to.deep.equal({ error: 'error' })
  })
})
