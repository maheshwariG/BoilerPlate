import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('Test App Entry point', () => {
  it('should have a header tag with Hello world React!', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h3').text()).toEqual('Hello world React!');
  });
});
