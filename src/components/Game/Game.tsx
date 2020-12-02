// REMEMBER TO REMOVE IT AT THE END!!!
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Questions, Status } from '../../types/game';
import { fetchQuestions } from '../../services/questions';
import { Counter } from '../Counter/Counter';
import { Question } from '../Question/Question';
import { Answers } from '../Answers/Answers';
import { GameOver } from '../GameOver/GameOver';
import { Loading } from '../Loading/Loading';
import { Rejected } from '../Rejected/Rejected';

export interface GameProps {
  url: string;
  setGame: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Game = (props: GameProps): JSX.Element => {
  const { url, setGame } = props;
  const [status, setStatus] = useState<Status>(Status.INITIAL);
  const [questions, setQuestions] = useState<Questions>([]);
  const [counter, setCounter] = useState<number>(0);
  const [correctAnswerNumber, setCorrectAnswerNumber] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);

  useEffect(() => {
    const getQuestions = async (): Promise<void> => {
      setStatus(Status.LOADING);
      try {
        const questionsResponse = await fetchQuestions(url);
        setQuestions(questionsResponse);
        console.log(questions);
        setStatus(Status.RESOLVED);
      } catch (e) {
        setStatus(Status.REJECTED);
      }
    };

    getQuestions();
  }, [url]);

  if (status === Status.LOADING) {
    return <Loading />;
  }

  if (status === Status.REJECTED) {
    return <Rejected setGame={setGame} />;
  }

  return (
    <div className="game">
      {questions.length && (
        <Counter
          counter={counter}
          questionsAmount={questions.length}
          correctAnswerNumber={correctAnswerNumber}
        />
      )}
      {questions.length && !gameOver && (
        <Question question={questions[counter].question} />
      )}
      {questions.length && !gameOver && (
        <Answers
          correctAnswer={questions[counter].correct_answer}
          incorrectAnswers={questions[counter].incorrect_answers}
          counter={counter}
          setCounter={setCounter}
          correctAnswerNumber={correctAnswerNumber}
          setCorrectAnswerNumber={setCorrectAnswerNumber}
          numberOfQuestions={questions.length}
          setGameOver={setGameOver}
        />
      )}
      {gameOver && (
        <GameOver
          setGame={setGame}
          correctAnswerNumber={correctAnswerNumber}
          questionsAmount={questions.length}
        />
      )}
    </div>
  );
};
