import request from 'supertest'
import mongoose from 'mongoose'

import { expect } from '../helpers/specHelper'

require('isomorphic-fetch')

describe('cardController', () => {
  let app
  let testCard = { text: 'should pass', likes: 0, column: 1 }

  before(() => {
    process.env.PORT = 3100
    process.env.DB_URI = 'mongodb://172.17.0.2:27017/retrodb_test'
    process.env.SEED = true

    app = require('../../../server/app')
  })

  after(done => {
    process.env.PORT = 3000
    process.env.DB_URI = 'mongodb://172.17.0.2:27017/retrodb'

    mongoose.connection.close()
    app.close(done)
  })

  it('POST - api/cards - responds to a malformed post with an error response', done => {
    const card = { text: 'should fail', likes: 0 }

    request(app)
      .post('/api/cards')
      .send(card)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400, done)
  })

  it('POST - api/cards - responds to a well-formed post with json', done => {
    request(app)
      .post('/api/cards')
      .send(testCard)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(res => {
        const { _id, text, likes, column } = res.body
        testCard = res.body

        expect(_id).to.be.a('string')
        expect(text).to.equal('should pass')
        expect(likes).to.equal(0)
        expect(column).to.equal(1)
      })
      .expect(200, done)
  })

  it('GET - api/cards - returns seeded cards', done => {
    request(app)
      .get('/api/cards')
      .expect('Content-Type', /json/)
      .expect(res => {
        expect(res.body).to.have.length(8)
      })
      .expect(200, done)
  })

  it('PUT - api/cards/:id - responds to a malformed put with an error response', done => {
    request(app)
      .put('/api/cards/a;lskdj')
      .send({ text: 'should fail' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400, done)
  })

  it('PUT - api/cards/:id - increases updateCards likes', done => {
    const { _id } = testCard

    request(app)
      .put(`/api/cards/${_id}`)
      .send({ text: 'should pass with more likes!', likes: 9000 })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(res => {
        const { text, likes, column } = res.body

        expect(text).to.equal('should pass with more likes!')
        expect(likes).to.equal(9000)
        expect(column).to.equal(1)
      })
      .expect(200, done)
  })

  it('DELETE - api/cards/:id - responds to a malformed delete with an error response', done => {
    request(app)
      .delete('/api/cards/a;lskdj')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400, done)
  })

  it('DELETE - api/cards/:id - deletes the card', done => {
    const { _id } = testCard

    request(app)
      .delete(`/api/cards/${_id}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })
})
