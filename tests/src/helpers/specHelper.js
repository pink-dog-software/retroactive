import '@babel/polyfill'
import chai, { expect } from 'chai'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

import { cardSocket, timerSocket } from '../../../src/store'

require('isomorphic-fetch')

configure({ adapter: new Adapter() })

chai.use(sinonChai)

let sandbox
beforeEach(() => {
  sandbox = sinon.createSandbox()
})

before(() => {
  sinon.stub(console, 'error').callsFake(warning => {
    throw new Error(warning)
  })
})

afterEach(() => {
  sandbox.restore()
})

after(() => {
  console.error.restore()
  cardSocket.close()
  timerSocket.close()
})

export { chai, React, expect, shallow, sandbox, sinon }
