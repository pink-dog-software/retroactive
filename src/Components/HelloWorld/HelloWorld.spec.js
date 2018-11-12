import { React, expect, shallow } from '../../specHelper';
import HelloWorld from './HelloWorld';

describe('HelloWorld', () => {
  let wrap;

  beforeEach(() => {
    const defaultProps = {};

    wrap = (props = defaultProps) => shallow(<HelloWorld {...props} />);
  });

  it('renders', () => {
    wrap();
  });

  it('displays Hello World', () => {
    const wrapper = wrap().dive();

    expect(wrapper.find('label').text()).to.equal('Hello World');
  });
});
