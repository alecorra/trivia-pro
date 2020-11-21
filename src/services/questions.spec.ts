/* eslint-disable @typescript-eslint/no-explicit-any */
import { Question } from '../types/game';

type APIResponse = Promise<{ status: number; json: () => Promise<any> }>;

const getAPIResponse = (response: any, status = 200): APIResponse =>
  Promise.resolve({
    status,
    json() {
      return Promise.resolve(response);
    },
  });

let mockFetchResponse: Promise<any>;

const mockFetch = jest.fn().mockImplementation(() => mockFetchResponse);

(global as any).fetch = mockFetch;

const mockQuestion: Question = {
  category: 'Entertainment: Video Games',
  type: 'multiple',
  difficulty: 'easy',
  question: 'In what city in the dystopia alternate future of Half-Life 2 do you first start in?',
  correct_answer: 'City 17',
  incorrect_answers: ['City 18', 'City 6', 'City 45'],
};

// eslint-disable-next-line import/first
import { fetchQuestions } from './questions';

describe('questions', () => {
  describe('fetchQuestions', () => {
    beforeEach(() => {
      mockFetch.mockClear();
      mockFetchResponse = getAPIResponse({
        response_code: 0,
        results: [],
      });
    });

    it('returns questions', async () => {
      mockFetchResponse = getAPIResponse({
        response_code: 0,
        results: [mockQuestion],
      });

      const questions = await fetchQuestions('');

      expect(questions.length).not.toBe(false);
      expect(questions).toEqual([mockQuestion]);
    });

    it('throws with a response_code not 0', async () => {
      mockFetchResponse = getAPIResponse(
        {
          response_code: 1,
          results: [],
        },
        400,
      );

      await expect(fetchQuestions('')).rejects.toThrow();
    });
  });
});
