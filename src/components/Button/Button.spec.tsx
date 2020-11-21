import React from 'react';
import { shallow } from 'enzyme';
import { Button, ButtonProps } from './Button';
import { ButtonType } from '../../types';

const mocksProps: ButtonProps = {
  text: 'test button',
  subtext: 'subtext',
  action: jest.fn(),
  type: ButtonType.BUTTON,
};

const wrapper = shallow(<Button {...mocksProps} />);

describe('Button component', () => {
  it('renders with props', () => {
    expect(wrapper.find('.button').exists()).toBe(true);
    expect(wrapper.find('.button__text').text()).toBe('Test Button');
    expect(wrapper.find('.button__subtext').text()).toBe(' - subtext - ');
    expect(wrapper.type()).toBe(mocksProps.type);
  });

  it('triggers the prop action when clicked', () => {
    wrapper.find('.button').simulate('click');

    expect(mocksProps.action).toHaveBeenCalledTimes(1);
  });
});
