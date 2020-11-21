import React, { useState } from 'react';

import { ButtonType } from '../../types';
import { Button } from '../Button/Button';
import { Footer } from '../Footer/Footer';
import { Game } from '../Game/Game';

import logo from '../../images/logo-placeholder.png';
import { randomQuestionURL } from '../../constants';

export const Home = (): JSX.Element => {
  const [game, setGame] = useState<boolean>(false);
  return (
    <div className="home">
      <div className="home__logo">
        <img className="home__logo-image" src={logo} alt="logo" />
      </div>
      <div className="home__buttons">
        <Button
          text="play"
          subtext="10 random questions"
          action={(): void => setGame(true)}
          type={ButtonType.BUTTON}
        />
        <Button
          text="pick your questions"
          subtext="up to 50 questions"
          action={(): void => console.log('custom')}
          type={ButtonType.BUTTON}
        />
        <Button
          text="add new question"
          action={(): void => console.log('add')}
          type={ButtonType.BUTTON}
        />
        <Button text="login" action={(): void => console.log('login')} type={ButtonType.BUTTON} />
      </div>
      <div className="home__footer">
        <Footer />
      </div>
      {game && <Game url={randomQuestionURL} />}
    </div>
  );
};
