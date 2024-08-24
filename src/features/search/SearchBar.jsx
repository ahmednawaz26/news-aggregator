import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setSearchKeyword } from './searchBarSlice';

const Input = styled.input`
  padding: 10px 20px;
  border-radius: 50px;
  border: none;
  outline: none;
  width: 300px;

  @media (max-width: 768px) {
    width: 170px;
  }
`;

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchKeyword(inputValue));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Search by keyword"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
