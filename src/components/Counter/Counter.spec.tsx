import React from 'react';
import { shallow } from 'enzyme';
import { Counter, CounterProps } from './Counter';

const mockProps: CounterProps = {
  counter: 5,
  questionsAmount: 10,
  correctAnswerNumber: 5,
};

describe('Counter component', () => {
  it('renders with given props', () => {
    const wrapper = shallow(<Counter {...mockProps} />);

    expect(wrapper.find('.counter').exists()).toBe(true);
    expect(wrapper.find('.counter__questions-content').text()).toBe('6 / 10');
    expect(wrapper.find('.counter__correct-content').text()).toBe(
      `${mockProps.correctAnswerNumber}`,
    );
  });
});
