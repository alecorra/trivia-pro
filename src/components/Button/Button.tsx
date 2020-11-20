import React from 'react';
import * as capitalize from 'capitalize';
import { ButtonType } from '../../types';

export interface ButtonProps {
  text: string;
  action(): void;
  type?: ButtonType;
}

export const Button = (props: ButtonProps): JSX.Element => {
  const { text, action, type } = props;

  return (
    <button className="button" onClick={action} type={type}>
      {capitalize.words(text)}
    </button>
  );
};
