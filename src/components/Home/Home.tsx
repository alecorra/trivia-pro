import React from 'react';
import logo from '../../images/logo-placeholder.png';
import { ButtonType } from '../../types';
import { Button } from '../Button/Button';
import { Footer } from '../Footer/Footer';

export const Home = (): JSX.Element => {
  return (
    <div className="home">
      <div className="home__logo">
        <img className="home__logo-image" src={logo} alt="logo" />
      </div>
      <div className="home__buttons">
        <Button
          text="play"
          subtext="10 random questions"
          action={(): void => console.log('play')}
          type={ButtonType.BUTTON}
        />
        <Button
          text="pick your questions"
          subtext="up to 50 questions"
          action={(): void => console.log('custom')}
          type={ButtonType.BUTTON}
        />
        <Button
          text="add your question"
          subtext="suggest your questions"
          action={(): void => console.log('add')}
          type={ButtonType.BUTTON}
        />
        <Button text="login" action={(): void => console.log('login')} type={ButtonType.BUTTON} />
      </div>
      <div className="home__footer">
        <Footer />
      </div>
    </div>
  );
};
