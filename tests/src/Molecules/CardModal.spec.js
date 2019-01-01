import { React, shallow, expect } from '../helpers/specHelper'
import { CardModal } from '../../../src/Molecules/CardModal/CardModal'

describe('CardModal', () => {
  let wrap
  let defaultProps
  beforeEach(() => {
    defaultProps = {
      id: 'test-id',
      classes: {},
      open: true,
      toggleCardModal: () => {}
    }

    wrap = (props = defaultProps) => shallow(<CardModal {...props} />)
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
