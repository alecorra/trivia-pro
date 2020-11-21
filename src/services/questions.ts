import { Questions } from '../types/game';

export const fetchQuestions = async (url: string): Promise<Questions> => {
  const response = await fetch(url);
  const responseJson = await response.json();

  if (responseJson.response_code !== 0) {
    throw new Error();
  }

  return responseJson.results;
};
