import React from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
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

const Select = ({ id, value, onSelectChange, options, marginBottom }) => {
  return (
    <>
      <StyledSelect id={id} value={value} onChange={onSelectChange} marginBottom={marginBottom}>
        {options.map(({ key, value }) => (
          <option key={key} value={key}>
            {value}
          </option>
        ))}
      </StyledSelect>
    </>
  );
};

export default Select;
