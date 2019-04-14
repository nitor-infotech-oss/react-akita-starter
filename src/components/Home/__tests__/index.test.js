import React from 'react';
import { mount } from 'enzyme';

import Home from '../index';

describe('Component: Home', () => {
  const props = {
    label: 'Sample',
    type: 'primary',
    count: 200,
  };
  it('Home matches snapshot', () => {
    const component = mount(<Home {...props} />);
    expect(component).toMatchSnapshot();
  });
});
