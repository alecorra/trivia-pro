export interface GameOverMessage {
  message: string;
  emoji: string;
}

export const createGameOverMessage = (
  totAmount: number,
  correctAnsw: number,
): GameOverMessage => {
  if (correctAnsw < totAmount / 4) {
    return {
      message: 'Mmmmh...definitetly quiz is not you cup of tea...',
      emoji: '😐',
    };
  }

  if (correctAnsw > totAmount / 4 && correctAnsw <= totAmount / 2) {
    return {
      message: 'Not too bad, but there is margin for improvement...',
      emoji: '🙂',
    };
  }

  if (correctAnsw > totAmount / 2 && correctAnsw < totAmount) {
    return {
      message: 'Well done!',
      emoji: '😁',
    };
  }

  return {
    message: 'PERFECT!!!',
    emoji: '🤓',
  };
};
