import { expect } from '../helpers/specHelper'
import cardCreationReducer from '../../../src/reducers/cardCreation'
import * as actions from '../../../src/actions/cardCreation'

describe('cardCreation reducer', () => {
  it('SHOW_ADD', () => {
    const cardCreation = cardCreationReducer(
      [false, false, false],
      actions.showCardCreation(0)
    )

    expect(cardCreation).to.deep.equal([true, false, false])
  })

  it('SHOW_ADD', () => {
    const cardCreation = cardCreationReducer(
      [false, false, true],
      actions.showCardCreation(0)
    )

    expect(cardCreation).to.deep.equal([true, false, true])
  })

  it('HIDE_ADD', () => {
    const cardCreation = cardCreationReducer(
      [true, true, false],
      actions.hideCardCreation(1)
    )

    expect(cardCreation).to.deep.equal([true, false, false])
  })
})
