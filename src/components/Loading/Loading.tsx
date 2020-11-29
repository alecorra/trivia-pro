import React from 'react';
import questionMark from '../../images/loading.png';

export const Loading: React.FunctionComponent = () => {
  return (
    <div className="loading">
      <img
        className="loading__image rotation"
        alt="loading spinner question mark"
        src={questionMark}
      />
    </div>
  );
};
