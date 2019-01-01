/* eslint-disable no-underscore-dangle */
import moxios from 'moxios'

import store from '../../../src/store'
import { getCompleteCard } from '../helpers/card.factory'
import { expect } from '../helpers/specHelper'

import {
  getCards,
  createCard,
  updateCard,
  postSuccess
} from '../../../src/actions/card'
import reset from '../../../src/actions/util'

describe('axios calls', () => {
  beforeEach(() => {
    store.dispatch(reset())
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

  context('POST', () => {
    it('handles success appropriately', done => {
      const card = getCompleteCard()

      moxios.stubRequest('/api/cards', {
        status: 200,
        response: card
      })

      store.dispatch(createCard(card))

      moxios.wait(() => {
        const { cards, error } = store.getState().cards

        expect(cards).to.deep.equal([card])
        expect(error).to.deep.equal({})
        done()
      })
    })

    it('handles failure appropriately', done => {
      const card = {}

      moxios.stubRequest('/api/cards', {
        status: 400
      })

      store.dispatch(createCard(card))

      moxios.wait(() => {
        const { cards, error } = store.getState().cards

        expect(cards).to.deep.equal([])
        expect(error.response.status).to.equal(400)
        done()
      })
    })
  })

  context('PUT', () => {
    it('handles success appropriately', done => {
      const card = getCompleteCard()
      store.dispatch(postSuccess(card))

      const updatedCard = { ...card, text: 'updated card' }

      moxios.stubRequest(`/api/cards/${card._id}`, {
        status: 200,
        response: updatedCard
      })

      store.dispatch(updateCard(updatedCard))

      moxios.wait(() => {
        const { cards, error } = store.getState().cards

        expect(cards).to.deep.equal([updatedCard])
        expect(error).to.deep.equal({})
        done()
      })
    })

    it('handles failure appropriately', done => {
      const updatedCard = { _id: 1 }

      moxios.stubRequest('/api/cards/1', {
        status: 400
      })

      store.dispatch(updateCard(updatedCard))

      moxios.wait(() => {
        const { cards, error } = store.getState().cards

        expect(cards).to.deep.equal([])
        expect(error.response.status).to.equal(400)
        done()
      })
    })
  })
})
