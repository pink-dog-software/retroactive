import { React, shallow, sandbox, expect } from '../../helpers/specHelper'
import { RetroCard } from '../../../../src/Components/Card/Card'

describe('Card', () => {
  let wrap
  let defaultProps
  let incrementLikesSpy
  beforeEach(() => {
    incrementLikesSpy = sandbox.spy()
    defaultProps = {
      classes: {},
      content: { text: 'test text', likes: 2 },
      open: false,
      toggleCardModal: () => {},
      incrementLikes: incrementLikesSpy
    }

    wrap = (props = defaultProps) => shallow(<RetroCard {...props} />)
  })

  it('renders', () => {
    wrap()
  })

  it('clicking the likes button calls incrementLikes with the card content', () => {
    const wrapper = wrap()
    const likesButton = wrapper.find('#card-likes-button')

    likesButton.prop('onClick')()
    expect(incrementLikesSpy).to.have.been.calledWith(defaultProps.content)
  })
})
