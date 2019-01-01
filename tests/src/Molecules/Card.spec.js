import { React, shallow } from '../helpers/specHelper'
import { RetroCard } from '../../../src/Molecules/Card/Card'

describe('Card', () => {
  let wrap
  let defaultProps
  beforeEach(() => {
    defaultProps = {
      classes: {},
      content: { text: 'test text' }
    }

    wrap = (props = defaultProps) => shallow(<RetroCard {...props} />)
  })

  it('renders', () => {
    wrap()
  })
})
