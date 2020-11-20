import React from 'react';
import logo from '../../images/logo-placeholder.png';
import { ButtonType } from '../../types';
import { Button } from '../Button/Button';

export const Home = (): JSX.Element => {
  return (
    <div className="home">
      <div className="home__logo">
        <img className="home__logo-image" src={logo} alt="logo" />
      </div>
      <div className="home__buttons">
        <Button text="test" action={(): void => console.log('click!')} type={ButtonType.BUTTON} />
      </div>
    </div>
  );
};
