export type Questions = Array<Question>;

export interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: Array<string>;
}

export enum Status {
  LOADING = 'loading',
  RESOLVED = 'resolved',
  REJECTED = 'rejected',
  INITIAL = '',
}
