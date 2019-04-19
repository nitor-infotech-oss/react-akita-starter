import React from 'react';
import { mount } from 'enzyme';

import List from '../List';

describe('Component: List', () => {
  const props = {
    items: [
      {
        data: {
          id: '1',
          ups: 100,
          author: 'sample',
          downs: 0,
          replies: {
            data: {
              children: [],
            },
          },
        },
      },
      {
        data: {
          id: '2',
          ups: 100,
          author: 'sample',
          downs: 0,
          replies: {
            data: {
              children: [],
            },
          },
        },
      },
    ],
  };

  it('List matches snapshot', () => {
    const component = mount(<List {...props} />);
    expect(component).toMatchSnapshot();
  });
});
