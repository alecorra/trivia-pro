// REMEMBER TO REMOVE IT AT THE END!!!
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Questions, Status } from '../../types/game';
import response from '../../response.json';
// import { fetchQuestions } from '../../services/questions';
import { Counter } from '../Counter/Counter';
import { Question } from '../Question/Question';

export interface GameProps {
  url: string;
}

export const Game = (props: GameProps): JSX.Element => {
  const { url } = props;
  const [status, setStatus] = useState<Status>(Status.INITIAL);
  const [questions, setQuestions] = useState<Questions>([]);
  const [counter, setCounter] = useState<number>(9);

  useEffect(() => {
    // const getQuestions = async (): Promise<void> => {
    const getQuestions = (): void => {
      setStatus(Status.LOADING);
      try {
        // const questionsResponse = await fetchQuestions(url);
        const questionsResponse = response.results;
        setQuestions(questionsResponse);
        setStatus(Status.RESOLVED);
      } catch (e) {
        setStatus(Status.REJECTED);
      }
    };

    getQuestions();
  }, []);

  return (
    <div className="game">
      <Counter counter={counter} questionsAmount={questions.length} />
      {questions.length && <Question question={questions[counter].question} />}
    </div>
  );
};
