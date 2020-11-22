import React from 'react';

export interface CounterProps {
  counter: number;
  questionsAmount: number;
}

export const Counter = (props: CounterProps): JSX.Element => {
  const { counter, questionsAmount } = props;
  return (
    <div className="counter">
      <div className="counter__questions">
        <p className="counter__questions-question">question</p>
        <p className="counter__questions-current">
          {counter} / {questionsAmount}
        </p>
      </div>
    </div>
  );
};
