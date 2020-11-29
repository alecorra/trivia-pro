import React, { useState } from 'react';
import { Dropdown } from '../Dropdown/Dropdown';
import { urlBuilder } from '../../utils/string';
import {
  optionsAmount,
  optionsCategory,
  optionsDifficulty,
  optionsType,
} from '../../constants';

export interface CustomQuestionsProps {
  setCustom: React.Dispatch<React.SetStateAction<boolean>>;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  setGame: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CustomQuestions = (props: CustomQuestionsProps): JSX.Element => {
  const { setCustom, setUrl, setGame } = props;

  const [amount, setAmount] = useState('10');
  const [category, setCategory] = useState('any');
  const [difficulty, setDifficulty] = useState('any');
  const [type, setType] = useState('any');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const submitHandler = (e: any): void => {
    e.preventDefault();
    const url = urlBuilder(amount, category, difficulty, type);
    setUrl(url);
    setCustom(false);
    setGame(true);
  };

  return (
    <div className="custom-questions">
      <form className="custom-questions__form" onSubmit={submitHandler}>
        <Dropdown
          state={amount}
          setState={setAmount}
          stateName="amount"
          labelDescription="Select number of questions:"
          options={optionsAmount}
        />
        <Dropdown
          state={category}
          setState={setCategory}
          stateName="category"
          labelDescription="Select your favourite category:"
          options={optionsCategory}
        />
        <Dropdown
          state={difficulty}
          setState={setDifficulty}
          stateName="difficulty"
          labelDescription="Select difficulty:"
          options={optionsDifficulty}
        />
        <Dropdown
          state={type}
          setState={setType}
          stateName="type"
          labelDescription="Select the question type:"
          options={optionsType}
        />
        <div className="custom-questions__form-button">
          <button className="form-button button" type="submit">
            Play
          </button>
        </div>
      </form>
    </div>
  );
};
