import React from 'react';

export interface CounterProps {
  counter: number;
  questionsAmount: number;
  correctAnswerNumber: number;
}

export const Counter = (props: CounterProps): JSX.Element => {
  const { counter, questionsAmount, correctAnswerNumber } = props;
  return (
    <div className="counter">
      <div className="counter__questions">
        <p className="counter__questions-description">question</p>
        <p className="counter__questions-content">
          {counter + 1} / {questionsAmount}
        </p>
      </div>
      <div className="counter__correct">
        <p className="counter__correct-description">correct answers</p>
        <p className="counter__correct-content">{correctAnswerNumber}</p>
      </div>
    </div>
  );
};
