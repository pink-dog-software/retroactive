import { React, shallow, expect } from '../../helpers/specHelper'
import { Connected } from '../../../../src/Molecules/CardModal/ConnectedCardModal'

describe('ConnectedCardModal', () => {
  let wrap
  let defaultProps
  beforeEach(() => {
    defaultProps = {
      content: {
        text: 'default-text',
        likes: 2
      }
    }

    wrap = (props = defaultProps) => shallow(<Connected {...props} />)
  })

  it('renders', () => {
    wrap()
  })

  it('handleFormChange updates state', () => {
    const wrapper = wrap()

    wrapper
      .instance()
      .handleFormChange({ target: { name: 'input', value: 'new value' } })

    expect(wrapper.state().input).to.equal('new value')
  })
})
