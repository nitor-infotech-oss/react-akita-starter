import React from 'react';
import { mount } from 'enzyme';

import Search from '../index';

describe('Component: Search', () => {
  const props = {
    label: 'Sample',
    type: 'primary',
    count: 200,
  };
  it('Search matches snapshot', () => {
    const component = mount(<Search {...props} />);
    expect(component).toMatchSnapshot();
  });
});
