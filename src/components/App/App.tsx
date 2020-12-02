import React from 'react';
import { TriviaPro } from '../TriviaPro/TriviaPro';

import './App.scss';

export const App = (): JSX.Element => {
  return (
    <div className="App">
      <TriviaPro />
    </div>
  );
};
