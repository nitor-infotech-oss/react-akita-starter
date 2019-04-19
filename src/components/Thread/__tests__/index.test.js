import React from 'react';
import { mount } from 'enzyme';

import Thread from '../index';

describe('Component: Thread', () => {
  const props = {};

  it('Thread matches snapshot', () => {
    const component = mount(<Thread {...props} />);
    expect(component).toMatchSnapshot();
  });
});
