import store from '../../../src/store'
import { expect } from '../helpers/specHelper'

import {
  showCardCreation,
  hideCardCreation
} from '../../../src/actions/cardCreation'
import reset from '../../../src/actions/util'

describe('card creation redux integration', () => {
  before(() => {
    store.dispatch(reset())
  })

  it('by default cardCreation returns [false, false, false]', () => {
    const { cardCreation } = store.getState()

    expect(cardCreation).to.deep.equal([false, false, false])
  })

  it('shows card creation below correct header', () => {
    store.dispatch(showCardCreation(0))

    const { cardCreation } = store.getState()

    expect(cardCreation[0]).to.be.true
  })

  it('hides card creation below correct header', () => {
    store.dispatch(hideCardCreation(0))

    const { cardCreation } = store.getState()

    expect(cardCreation[0]).to.be.false
  })
})
