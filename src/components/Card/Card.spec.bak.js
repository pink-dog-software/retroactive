/* eslint-disable */
import {
  React,
  shallow,
  sandbox,
  expect
} from '../../../tests/src/helpers/specHelper'
import { RetroCard } from './Card'

describe('Card', () => {
  let wrap
  let defaultProps
  let incrementLikesSpy
  beforeEach(() => {
    incrementLikesSpy = sandbox.spy()
    defaultProps = {
      id: 'test',
      classes: {},
      content: { text: 'test text', likes: 2 },
      incrementLikes: incrementLikesSpy
    }

    wrap = (props = defaultProps) => shallow(<RetroCard {...props} />)
  })

  it('renders', () => {
    wrap()
  })

  it('clicking the likes button calls incrementLikes with the card content', () => {
    const wrapper = wrap()
    const likesButton = wrapper.find('#test-likes')

    likesButton.prop('onClick')()
    expect(incrementLikesSpy).to.have.been.calledWith(defaultProps.content)
  })

  it('toggleCardModal flips open state', () => {
    const wrapper = wrap()

    wrapper.instance().toggleCardModal(true)

    expect(wrapper.state().open).to.be.true
  })
})
