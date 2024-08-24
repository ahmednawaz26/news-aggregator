import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  ${(props) =>
    props.marginBottom &&
    `
    margin-bottom: ${props.marginBottom};
  `}
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;
`;

const Input = ({ type, id, placeholder, value, onInputChange, name, marginBottom }) => {
  return (
    <StyledInput
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onInputChange}
      marginBottom={marginBottom}
    />
  );
};

export default Input;
