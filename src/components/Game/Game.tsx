import React, { useEffect, useState } from 'react';
import { Questions, Status } from '../../types/game';
import response from '../../response.json';
// import { fetchQuestions } from '../../services/questions';

export interface GameProps {
  url: string;
}

export const Game = (props: GameProps): JSX.Element => {
  const { url } = props;
  const [status, setStatus] = useState<Status>(Status.INITIAL);
  const [questions, setQuestions] = useState<Questions>([]);
  // const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    const getQuestions = async (): Promise<void> => {
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
  }, [url]);

  return (
    <div className="game">
      {questions.map((question) => (
        <h1 key={question.correct_answer}>{question.question}</h1>
      ))}
      <p>{status}</p>
    </div>
  );
};
