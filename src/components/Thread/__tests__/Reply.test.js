import React from 'react';
import { mount } from 'enzyme';

import Reply from '../Reply';

describe('Component: Reply', () => {
  const props = {
    reply: {
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
    counter: 1,
  };

  it('Reply matches snapshot', () => {
    const component = mount(<Reply {...props} />);
    expect(component).toMatchSnapshot();
  });
});
