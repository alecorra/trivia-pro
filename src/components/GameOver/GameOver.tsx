import React from 'react';

export interface GameOverProps {
  correctAnswerNumber: number;
  setGame: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GameOver = (props: GameOverProps): JSX.Element => {
  const { correctAnswerNumber, setGame } = props;

  return (
    <div className="gameover">
      <h1>{correctAnswerNumber}</h1>
      <button onClick={() => setGame(false)}>play again</button>
    </div>
  );
};
