import { React, shallow } from '../helpers/specHelper'
import { CardModal } from '../../../src/Molecules/CardModal/CardModal'

describe('CardModal', () => {
  let wrap
  let defaultProps
  beforeEach(() => {
    defaultProps = {
      id: 'test-id',
      classes: {},
      open: true,
      toggleCardModal: () => {},
      updateCard: () => {},
      handleFormChange: () => {}
    }

    wrap = (props = defaultProps) => shallow(<CardModal {...props} />)
  })

  it('renders', () => {
    wrap()
  })
})
