import React from 'react';
import he from 'he';

export interface QuestionProps {
  question: string;
}

export const Question = (props: QuestionProps): JSX.Element => {
  const { question } = props;

  return (
    <div className="question">
      <p className="question__text">{he.decode(question)}</p>
    </div>
  );
};
