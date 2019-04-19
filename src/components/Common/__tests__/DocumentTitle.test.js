import React from 'react';
import { mount } from 'enzyme';

import { snapshotDiff } from '../../../utils/TestUtils';
import DocumentTitle from '../DocumentTitle';

describe('Component: DocumentTitle', () => {
  const props = {
    prefix: 'demo',
    listen: false,
  };
  const component = mount(<DocumentTitle {...props} />);

  it('DocumentTitle matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('DocumentTitle matches snapshot Diff 1', () => {
    const component1 = mount(<DocumentTitle {...props} listen />);
    expect(snapshotDiff(component, component1)).toMatchSnapshot();
  });
});
