import { React, shallow, expect } from '../../helpers/specHelper'
import { Connected } from '../../../../src/components/Card/ConnectedCard'

describe('Connected Card', () => {
  let wrap
  let defaultProps
  beforeEach(() => {
    defaultProps = {
      classes: {},
      content: { text: 'test text', likes: 2 }
    }

    wrap = (props = defaultProps) => shallow(<Connected {...props} />)
  })

  it('renders', () => {
    wrap()
  })

  it('toggleCardModal flips open state', () => {
    const wrapper = wrap()
    wrapper.setState({ open: false })

    wrapper.instance().toggleCardModal()

    expect(wrapper.state().open).to.be.true
  })
})
