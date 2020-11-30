import React from 'react';
import { mount } from 'enzyme';
import { CustomQuestions, CustomQuestionsProps } from './CustomQuestions';

const mock = {
  props: {
    setCustom: jest.fn(),
    setUrl: jest.fn(),
    setGame: jest.fn(),
  } as CustomQuestionsProps,
};

describe('CustomQuestions component', () => {
  it('renders with given props', () => {
    const wrapper = mount(<CustomQuestions {...mock.props} />);

    expect(wrapper.find('.custom-questions__form').exists()).toBe(true);
    expect(wrapper.find('.dropdown').exists()).toBe(true);
  });

  it('calls setCustom, setUrl and setGame when button is clicked', () => {
    const wrapper = mount(<CustomQuestions {...mock.props} />);

    wrapper.find('form').first().simulate('submit');

    expect(mock.props.setUrl).toHaveBeenCalled();
    expect(mock.props.setGame).toHaveBeenCalled();
    expect(mock.props.setCustom).toHaveBeenCalled();
  });
});
