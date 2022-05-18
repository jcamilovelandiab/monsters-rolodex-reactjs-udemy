import React,
  {
    ChangeEvent,
    ChangeEventHandler
  } from 'react';
import './search-box.styles.css';

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  func?: ChangeEventHandler;
  // onChangeHandler: ChangeEventHandler<HTMLInputElement>;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBox = ({ className, placeholder, onChangeHandler }: SearchBoxProps) => {
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
}