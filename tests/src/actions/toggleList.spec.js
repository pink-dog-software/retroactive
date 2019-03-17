import { expect } from '../helpers/specHelper'
import { toggleList } from '../../../src/actions/actions.constants'

import * as actions from '../../../src/actions/toggleList'

describe('card list expansion action creators', () => {
  it('expandList returns SHOW_List', () => {
    const { type, payload } = actions.expandList(0)

    expect(type).to.equal(toggleList.SHOW_LIST)
    expect(payload).to.equal(0)
  })

  it('collapseList returns HIDE_LIST', () => {
    const { type, payload } = actions.collapseList(0)

    expect(type).to.equal(toggleList.HIDE_LIST)
    expect(payload).to.equal(0)
  })
})
