import '@babel/polyfill'
import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

let sandbox

chai.use(sinonChai)

beforeEach(() => {
  sandbox = sinon.createSandbox()
})

afterEach(() => {
  sandbox.restore()
})

export { expect, sandbox }
