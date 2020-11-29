export enum ButtonType {
  BUTTON = 'button',
  SUBMIT = 'submit',
  RESET = 'reset',
}

export type Options = Array<Option>;

export interface Option {
  value: string;
  description: string;
}
