import React from 'react';
import logo from '../../images/logo-placeholder.png';

export const Home = (): JSX.Element => {
  return (
    <div className="home">
      <div className="home__logo">
        <img className="home__logo-image" src={logo} alt="logo" />
      </div>
      <div className="home__buttons">buttons here</div>
    </div>
  );
};
