import React from 'react';
import { shallow } from 'enzyme';
import { Answers, AnswersProps } from './Answers';

const mockProps: AnswersProps = {
  correctAnswer: 'right answer',
  incorrectAnswers: ['wrong answer'],
  counter: 5,
  setCounter: jest.fn(),
  correctAnswerNumber: 3,
  setCorrectAnswerNumber: jest.fn(),
  numberOfQuestions: 10,
  setGameOver: jest.fn(),
};

const answers = [...mockProps.incorrectAnswers, mockProps.correctAnswer];

describe('Answers component', () => {
  it('renders with given props', () => {
    const wrapper = shallow(<Answers {...mockProps} />);

    expect(wrapper.find('.answers').exists()).toBe(true);
    expect(wrapper.find('.answers__button').exists()).toBe(true);
    expect(wrapper.find('.answers__button').length).toBe(2);

    wrapper.find('.answers__button').forEach((button) => {
      expect(answers.includes(button.text())).toBe(true);
    });
  });
});
