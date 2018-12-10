import moxios from 'moxios'

import store from '../../../src/store'
import { getCompleteCard } from '../helpers/card.factory'
import { expect } from '../helpers/specHelper'

import { getCards } from '../../../src/actions/card'

describe('axios calls', () => {
  beforeEach(() => {
    moxios.install()
  })

  afterEach(() => {
    moxios.uninstall()
  })

  context('GET', () => {
    it('handles success appropriately', done => {
      const card1 = getCompleteCard()
      const card2 = getCompleteCard()

      moxios.stubRequest('/api/cards', {
        status: 200,
        response: [card1, card2]
      })

      store.dispatch(getCards())

      moxios.wait(() => {
        const { cards, error } = store.getState().cards

        expect(cards).to.deep.equal([card1, card2])
        expect(error).to.deep.equal({})
        done()
      })
    })

    it('handles failure appropriately', done => {
      moxios.stubRequest('/api/cards', {
        status: 400
      })

      store.dispatch(getCards())

      moxios.wait(() => {
        const { cards, error } = store.getState().cards

        expect(cards).to.deep.equal([])
        expect(error.response.status).to.equal(400)
        done()
      })
    })
  })
})
