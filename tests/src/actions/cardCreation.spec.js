import { expect } from '../helpers/specHelper'
import { cardCreation } from '../../../src/actions/actions.constants'

import * as actions from '../../../src/actions/cardCreation'

describe('card creation action creators', () => {
  it('showCardCreation returns SHOW_CARD', () => {
    const { type, payload } = actions.showCardCreation(0)

    expect(type).to.equal(cardCreation.SHOW_ADD)
    expect(payload).to.equal(0)
  })

  it('hideCardCreation returns HIDE_CARD', () => {
    const { type, payload } = actions.hideCardCreation(0)

    expect(type).to.equal(cardCreation.HIDE_ADD)
    expect(payload).to.equal(0)
  })
})
