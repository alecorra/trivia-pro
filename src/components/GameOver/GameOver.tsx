import React from 'react';
import { createGameOverMessage, GameOverMessage } from '../../utils/messages';

export interface GameOverProps {
  correctAnswerNumber: number;
  questionsAmount: number;
  setGame: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GameOver = (props: GameOverProps): JSX.Element => {
  const { correctAnswerNumber, questionsAmount, setGame } = props;
  const message: GameOverMessage = createGameOverMessage(
    questionsAmount,
    correctAnswerNumber,
  );

  return (
    <div className="gameover">
      <h1 className="gameover__message">{message.message}</h1>
      <p className="gameover__emoji">{message.emoji}</p>
      <button
        className="gameover__button button"
        onClick={(): void => setGame(false)}
      >
        Play again
      </button>
    </div>
  );
};
