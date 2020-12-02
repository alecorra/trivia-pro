import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import mockResponse from '../../response.json';

const mocks = {
  props: {
    url: 'https://testurl.com',
    setGame: jest.fn(),
  } as GameProps,
  fetchQuestion: jest.fn(),
};

jest.mock('../../services/questions', () => ({
  fetchQuestions: mocks.fetchQuestion,
}));

// eslint-disable-next-line import/first
import { Game, GameProps } from './Game';

describe('Game component', () => {
  beforeEach(() => {
    mocks.fetchQuestion.mockReturnValue(mockResponse.results[0]);
  });

  it.skip('renders child component if fetch returns questions', async () => {
    const wrapper = mount(<Game {...mocks.props} />);

    await act(async () => {
      wrapper.mount();
    });

    expect(wrapper.find('.game').exists()).toBe(true);
  });
});
