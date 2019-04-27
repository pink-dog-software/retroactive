import { React, shallow } from '../../../tests/src/helpers/specHelper'
import { Timer } from './Timer'

describe('Timer', () => {
  let wrap
  let defaultProps
  beforeEach(() => {
    defaultProps = {
      classes: {}
    }

    wrap = (props = defaultProps) => shallow(<Timer {...props} />)
  })

  it('renders', () => {
    wrap()
  })
})
