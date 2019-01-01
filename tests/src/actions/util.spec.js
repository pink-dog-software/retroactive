import { expect } from '../helpers/specHelper'
import { utilConstants } from '../../../src/actions/actions.constants'

import reset from '../../../src/actions/util'

describe('util action creators', () => {
  it('reset returns { type: RESET }', () => {
    const { type } = reset()

    expect(type).to.equal(utilConstants.RESET)
  })
})
