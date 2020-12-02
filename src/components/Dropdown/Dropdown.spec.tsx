import React from 'react';
import { shallow } from 'enzyme';
import { Dropdown, DropdownProps } from './Dropdown';

const mockProps: DropdownProps = {
  stateName: 'testName',
  state: 'testState',
  setState: jest.fn(),
  labelDescription: 'testLabel',
  options: [
    {
      value: 'testValue',
      description: 'testDescription',
    },
  ],
};

describe('Dropdown component', () => {
  it('renders with given props', () => {
    const wrapper = shallow(<Dropdown {...mockProps} />);

    expect(wrapper.find('.dropdown').exists()).toBe(true);
    expect(wrapper.find('.dropdown__label').exists()).toBe(true);
    expect(wrapper.find('.dropdown__label').text()).toBe(
      mockProps.labelDescription,
    );
    expect(wrapper.find('.dropdown__select').exists()).toBe(true);
    expect(wrapper.find('option').exists()).toBe(true);
    expect(wrapper.find('option').text()).toBe(
      mockProps.options[0].description,
    );
  });
});
