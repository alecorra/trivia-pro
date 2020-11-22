import React from 'react';
import { shallow } from 'enzyme';
import { Question, QuestionProps } from './Question';

const mockProps: QuestionProps = {
  question: 'What year was the game Team Fortress 2 released?',
};

describe('Question component', () => {
  it('renders with the given props', () => {
    const wrapper = shallow(<Question {...mockProps} />);

    expect(wrapper.find('.question').exists()).toBe(true);
    expect(wrapper.find('.question__text').text()).toBe(mockProps.question);
  });
});
