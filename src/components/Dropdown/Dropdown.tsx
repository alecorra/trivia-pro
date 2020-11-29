import React from 'react';
import { Option, Options } from '../../types/common';

export interface DropdownProps {
  stateName: string;
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  labelDescription: string;
  options: Options;
}

export const Dropdown: React.FunctionComponent<DropdownProps> = (
  props: DropdownProps,
) => {
  const { stateName, state, setState, labelDescription, options } = props;
  return (
    <div className="dropdown">
      <label className="dropdown__label" htmlFor={stateName}>
        {labelDescription}
      </label>
      <select
        className="dropdown__select"
        id={stateName}
        value={state}
        onChange={(e): void => setState(e.target.value)}
      >
        {options.map((option: Option, index) => {
          return (
            <option key={index} value={option.value}>
              {option.description}
            </option>
          );
        })}
      </select>
    </div>
  );
};
