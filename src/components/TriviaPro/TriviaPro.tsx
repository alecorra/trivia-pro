import React, { useState } from 'react';

import { ButtonType } from '../../types';
import { Button } from '../Button/Button';
import { Footer } from '../Footer/Footer';
import { Game } from '../Game/Game';
import { CustomQuestions } from '../CustomQuestions/CustomQuestions';
import { ServiceNotAvailable } from '../ServiceNotAvailable/ServiceNotAvailable';

import logo from '../../images/trivia-pro-logo.png';
import { randomQuestionURL } from '../../constants';

export const TriviaPro = (): JSX.Element => {
  const [game, setGame] = useState<boolean>(false);
  const [url, setUrl] = useState<string>('');
  const [custom, setCustom] = useState<boolean>(false);
  const [serviceIsAvailable, setServiceIsAvailable] = useState<boolean>(true);

  if (!serviceIsAvailable) {
    return (
      <ServiceNotAvailable setServiceIsAvailable={setServiceIsAvailable} />
    );
  }

  return (
    <div className="trivia-pro">
      {!game && !custom && (
        <>
          <div className="trivia-pro__logo">
            <img className="trivia-pro__logo-image" src={logo} alt="logo" />
          </div>
          <div className="trivia-pro__buttons">
            <Button
              text="play"
              subtext="10 random questions"
              action={(): void => {
                setGame(true);
                setUrl(randomQuestionURL);
              }}
              type={ButtonType.BUTTON}
            />
            <Button
              text="pick your questions"
              subtext="up to 50 questions"
              action={(): void => setCustom(true)}
              type={ButtonType.BUTTON}
            />
            <Button
              text="add new question"
              subtext="not available in beta version"
              action={(): void => setServiceIsAvailable(false)}
              type={ButtonType.BUTTON}
            />
            <Button
              text="login"
              subtext="not available in beta version"
              action={(): void => setServiceIsAvailable(false)}
              type={ButtonType.BUTTON}
            />
          </div>
        </>
      )}
      {custom && (
        <CustomQuestions
          setCustom={setCustom}
          setUrl={setUrl}
          setGame={setGame}
        />
      )}
      {!game && !custom && (
        <div className="trivia-pro__footer">
          <Footer />
        </div>
      )}
      {game && <Game url={url} setGame={setGame} />}
    </div>
  );
};
