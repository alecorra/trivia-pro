import React from 'react';

export const Footer = (): JSX.Element => {
  return (
    <div className="footer">
      <p className="footer__name">Trivia Pro - beta version</p>
      <p className="footer__dev">
        <a href="https://github.com/alecorra" target="_blank" rel="noreferrer">
          AC development&nbsp;
        </a>
        &copy; 2020
      </p>
      <p className="footer__license">
        Trivia Pro is under MIT&nbsp;
        <a
          href="https://opensource.org/licenses/MIT"
          target="_blank"
          rel="noreferrer"
        >
          license
        </a>
      </p>
      <p className="footer__code">
        Source code&nbsp;
        <a
          href="https://github.com/alecorra/trivia-pro"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
      </p>
      <p className="footer__powered">
        Powered by&nbsp;
        <a href="https://opentdb.com/" target="_blank" rel="noreferrer">
          Open Trivia DB
        </a>
        &nbsp;api
      </p>
    </div>
  );
};
