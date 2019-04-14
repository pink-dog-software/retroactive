import {
  React,
  shallow,
  sandbox,
  expect
} from '../../../tests/src/helpers/specHelper'
import { ListHeader } from './ListHeader'

describe('ListHeader', () => {
  let wrap
  let defaultProps
  let openCardCreationSpy
  let collapseSpy
  beforeEach(() => {
    openCardCreationSpy = sandbox.spy()
    collapseSpy = sandbox.spy()
    defaultProps = {
      classes: {},
      cardCreation: [false, false, false],
      listsExpanded: [true, true, true],
      openCardCreation: openCardCreationSpy,
      closeCardCreation: () => {},
      expand: () => {},
      collapse: collapseSpy,
      title: 'title',
      column: 0
    }

    wrap = (props = defaultProps) => shallow(<ListHeader {...props} />)
  })

  it('renders', () => {
    wrap()
  })

  it('by default renders ExpandLess and Add', () => {
    const wrapper = wrap()

    expect(wrapper.find('#expand-less')).to.have.lengthOf(1)
    expect(wrapper.find('#add-card-creation-icon')).to.have.lengthOf(1)
  })

  it('renders ExpandMore when listsExpanded[0] is false', () => {
    const wrapper = wrap({
      ...defaultProps,
      listsExpanded: [false, true, true]
    })

    expect(wrapper.find('#expand-more')).to.have.lengthOf(1)
  })

  it('renders Close when cardCreation[0] is true', () => {
    const wrapper = wrap({
      ...defaultProps,
      cardCreation: [true, false, false]
    })

    expect(wrapper.find('#close-card-creation-icon')).to.have.lengthOf(1)
  })

  it('toggles card creation', () => {
    const wrapper = wrap()

    const node = wrapper.find('#list-header-add-0')
    node.props().onClick()

    expect(openCardCreationSpy).to.have.been.called
  })

  it('toggles list expantion', () => {
    const wrapper = wrap()

    const node = wrapper.find('#list-header-expand-0')
    node.props().onClick()

    expect(collapseSpy).to.have.been.called
  })
})
