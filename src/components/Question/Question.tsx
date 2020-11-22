import React from 'react';

export interface QuestionProps {
  question: string;
}

export const Question = (props: QuestionProps): JSX.Element => {
  const { question } = props;

  return (
    <div className="question">
      <p className="question__text">{question}</p>
    </div>
  );
};
