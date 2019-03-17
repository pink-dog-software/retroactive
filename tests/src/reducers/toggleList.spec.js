import { expect } from '../helpers/specHelper'
import toggleListReducer from '../../../src/reducers/toggleList'
import * as actions from '../../../src/actions/toggleList'

describe('toggleList reducer', () => {
  it('SHOW_LIST', () => {
    const listsExpanded = toggleListReducer(
      [false, false, false],
      actions.expandList(0)
    )

    expect(listsExpanded).to.deep.equal([true, false, false])
  })

  it('SHOW_LIST', () => {
    const listsExpanded = toggleListReducer(
      [false, false, true],
      actions.expandList(0)
    )

    expect(listsExpanded).to.deep.equal([true, false, true])
  })

  it('HIDE_LIST', () => {
    const listsExpanded = toggleListReducer(
      [true, true, false],
      actions.collapseList(1)
    )

    expect(listsExpanded).to.deep.equal([true, false, false])
  })
})
