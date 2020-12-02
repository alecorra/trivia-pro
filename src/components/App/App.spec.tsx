import React from 'react';
import { mount } from 'enzyme';
import { App } from './App';
import { TriviaPro } from '../TriviaPro/TriviaPro';

describe('App', () => {
  it('renders', () => {
    const wrapper = mount(<App />);

    expect(wrapper.find('.App').exists()).toBe(true);
    expect(wrapper.find(TriviaPro).exists()).toBe(true);
  });
});
