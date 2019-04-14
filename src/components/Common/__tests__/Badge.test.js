import React from 'react';
import { mount } from 'enzyme';

import Badge from '../Badge';

describe('Component: Badge', () => {
  const props = {
    label: 'Sample',
    type: 'primary',
    count: 200,
  };
  it('Badge matches snapshot', () => {
    const component = mount(<Badge {...props} />);
    expect(component).toMatchSnapshot();
  });
});
