import store from '../../../src/store'
import { expect } from '../helpers/specHelper'

import { expandList, collapseList } from '../../../src/actions/toggleList'
import reset from '../../../src/actions/util'

describe('expand list redux integration', () => {
  before(() => {
    store.dispatch(reset())
  })

  it('by default expandList returns [true, true, true]', () => {
    const { listsExpanded } = store.getState()

    expect(listsExpanded).to.deep.equal([true, true, true])
  })

  it('shows card list below correct header', () => {
    store.dispatch(expandList(0))

    const { listsExpanded } = store.getState()

    expect(listsExpanded[0]).to.be.true
  })

  it('hides card list below correct header', () => {
    store.dispatch(collapseList(0))

    const { listsExpanded } = store.getState()

    expect(listsExpanded[0]).to.be.false
  })
})
