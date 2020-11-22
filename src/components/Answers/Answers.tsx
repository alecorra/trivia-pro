import React from 'react';
import he from 'he';
import { shuffle } from '../../utils/array';

export interface AnswersProps {
  correctAnswer: string;
  incorrectAnswers: Array<string>;
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}

export const Answers = (props: AnswersProps): JSX.Element => {
  const { correctAnswer, incorrectAnswers, counter, setCounter } = props;
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
    }, 2000);

    setTimeout(() => {
      buttons.forEach((button) => {
        if (button.classList.value.search('correct') >= 0) {
          button.classList.remove('correct');
        } else {
          button.classList.remove('wrong');
        }
      });

      if (selectedAnswer?.textContent === he.decode(correctAnswer)) {
        // const count = rightAnswersCounter + 1;
        // setRightAnswersCounter(count);
        console.log('correct answer!');
      }

      // const counterIncrement = counter + 1;
      // if (counterIncrement === numberOfQuestions) {
      //   endgameHandler(true);
      // }

      setCounter(counter + 1);
    }, 4000);
  };

  return (
    <div className="answers">
      {answers.map((answer, i) => {
        return (
          <button
            className="answers__button button"
            key={i + 1}
            id={(i + 1).toString()}
            onClick={(e) => clickHandler(e)}
          >
            {he.decode(answer)}
          </button>
        );
      })}
    </div>
  );
};
