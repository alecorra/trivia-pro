import React from 'react';
import { shallow } from 'enzyme';

const mockMessage = {
  message: 'You are a loser',
  emoji: '😐',
};

const mocks = {
  props: {
    correctAnswerNumber: 5,
    questionsAmount: 10,
    setGame: jest.fn(),
  } as GameOverProps,
  createGameOverMessage: jest.fn().mockReturnValue(mockMessage),
};

jest.mock('../../utils/string', () => ({
  createGameOverMessage: mocks.createGameOverMessage,
}));

// eslint-disable-next-line import/first
import { GameOver, GameOverProps } from './GameOver';

describe('GameOver component', () => {
  it('render with the given props', () => {
    const wrapper = shallow(<GameOver {...mocks.props} />);

    expect(wrapper.find('.gameover').exists()).toBe(true);
    expect(wrapper.find('.gameover__message').text()).toBe(mockMessage.message);
    expect(wrapper.find('.gameover__emoji').text()).toBe(mockMessage.emoji);
  });

  it('call setGame with false when button is clicked', () => {
    const wrapper = shallow(<GameOver {...mocks.props} />);

    wrapper.find('.gameover__button').simulate('click');

    expect(mocks.props.setGame).toHaveBeenCalledWith(false);
  });
});
