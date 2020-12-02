import React from 'react';
import { shallow } from 'enzyme';
import { ServiceNotAvailable } from './ServiceNotAvailable';

const mockProps = {
  setServiceIsAvailable: jest.fn(),
};

describe('ServiceNotAvailable component', () => {
  it('renders with given props', () => {
    const wrapper = shallow(<ServiceNotAvailable {...mockProps} />);

    expect(wrapper.find('.service-not-available').exists()).toBe(true);
  });

  it('calls setServiceIsAvailable with true when button is clicked', () => {
    const wrapper = shallow(<ServiceNotAvailable {...mockProps} />);

    wrapper.find('.service-not-available__button').simulate('click');

    expect(mockProps.setServiceIsAvailable).toHaveBeenCalledWith(true);
  });
});
