import React from 'react';
import he from 'he';
import { shuffle } from '../../utils/array';

export interface AnswersProps {
  correctAnswer: string;
  incorrectAnswers: Array<string>;
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  correctAnswerNumber: number;
  setCorrectAnswerNumber: React.Dispatch<React.SetStateAction<number>>;
  numberOfQuestions: number;
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Answers = (props: AnswersProps): JSX.Element => {
  const {
    correctAnswer,
    incorrectAnswers,
    counter,
    setCounter,
    correctAnswerNumber,
    setCorrectAnswerNumber,
    numberOfQuestions,
    setGameOver,
  } = props;
  const answers = shuffle([...incorrectAnswers, correctAnswer]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const clickHandler = (e: any): void => {
    const buttons = document.querySelectorAll('.answers__button');
    const selectedAnswerId = e.target.getAttribute('id');
    const selectedAnswer = document.getElementById(`${selectedAnswerId}`);

    selectedAnswer?.classList.add('blink');

    setTimeout(() => {
      selectedAnswer?.classList.remove('blink');

      buttons.forEach((button) => {
        if (button.textContent === he.decode(correctAnswer)) {
          button.classList.add('correct');
        } else {
          button.classList.add('wrong');
        }
      });

      setTimeout(() => {
        buttons.forEach((button) => {
          if (button.classList.value.search('correct') >= 0) {
            button.classList.remove('correct');
          } else {
            button.classList.remove('wrong');
          }
        });

        if (selectedAnswer?.textContent === he.decode(correctAnswer)) {
          setCorrectAnswerNumber(correctAnswerNumber + 1);
        }

        if (counter + 1 < numberOfQuestions) {
          setCounter(counter + 1);
        } else {
          setGameOver(true);
        }
      }, 2000);
    }, 2000);
  };

  return (
    <div className="answers">
      {answers.map((answer, i) => {
        return (
          <button
            className="answers__button button"
            key={i + 1}
            id={(i + 1).toString()}
            onClick={(
              e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
            ): void => clickHandler(e)}
          >
            {he.decode(answer)}
          </button>
        );
      })}
    </div>
  );
};
