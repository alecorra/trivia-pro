import React from 'react';
import { shallow } from 'enzyme';
import { Loading } from './Loading';

describe('Loading component', () => {
  it('renders', () => {
    const wrapper = shallow(<Loading />);

    expect(wrapper.find('.loading').exists()).toBe(true);
    expect(wrapper.find('.loading__image').exists()).toBe(true);
  });
});
