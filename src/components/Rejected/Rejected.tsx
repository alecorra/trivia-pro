import React from 'react';

export interface RejectedPorps {
  setGame: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Rejected = (props: RejectedPorps): JSX.Element => {
  const { setGame } = props;
  return (
    <div className="rejected">
      <p className="rejected__text1">
        It seems there are not enough questions right now to satisfy your
        request.
      </p>
      <p className="rejected__text2">Please try to update your settings.</p>
      <button
        className="rejected__button button"
        onClick={(): void => setGame(false)}
      >
        Back to homepage
      </button>
    </div>
  );
};
