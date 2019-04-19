import React from 'react';
import { mount } from 'enzyme';

import Comment from '../Comment';

describe('Component: Comment', () => {
  const props = {
    comment: {
      data: {
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
  };

  it('Comment matches snapshot', () => {
    const component = mount(<Comment {...props} />);
    expect(component).toMatchSnapshot();
  });
});
