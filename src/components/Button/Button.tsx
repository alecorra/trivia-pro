import React from 'react';
import * as capitalize from 'capitalize';
import { ButtonType } from '../../types';

export interface ButtonProps {
  text: string;
  subtext?: string;
  action(): void;
  type?: ButtonType;
}

export const Button = (props: ButtonProps): JSX.Element => {
  const { text, subtext, action, type } = props;

  return (
    <button className="button" onClick={action} type={type}>
      <p className="button__text">{capitalize.words(text)}</p>
      {subtext && <p className="button__subtext"> - {subtext.toLowerCase()} - </p>}
    </button>
  );
};
