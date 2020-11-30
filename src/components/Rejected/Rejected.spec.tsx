import React from 'react';
import { shallow } from 'enzyme';
import { Rejected } from './Rejected';

const mockProps = {
  setGame: jest.fn(),
};

describe('Rejected component', () => {
  it('renders with given props', () => {
    const wrapper = shallow(<Rejected {...mockProps} />);

    expect(wrapper.find('.rejected').exists()).toBe(true);
  });

  it('calls setGame with false when button is clicked', () => {
    const wrapper = shallow(<Rejected {...mockProps} />);

    wrapper.find('.rejected__button').simulate('click');

    expect(mockProps.setGame).toHaveBeenCalledWith(false);
  });
});
