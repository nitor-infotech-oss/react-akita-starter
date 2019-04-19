import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import App from '../App';

describe('Component: App', () => {
  const props = {};

  it('App renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('App matches snapshot', () => {
    const component = mount(<App {...props} />);
    expect(component).toMatchSnapshot();
  });
});
