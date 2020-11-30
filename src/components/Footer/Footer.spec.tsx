import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from './Footer';

describe('Footer component', () => {
  it('renders', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper.find('.footer').exists()).toBe(true);
    expect(wrapper.find('.footer__name').exists()).toBe(true);
    expect(wrapper.find('.footer__license').exists()).toBe(true);
    expect(wrapper.find('.footer__code').exists()).toBe(true);
    expect(wrapper.find('.footer__powered').exists()).toBe(true);
  });
});
