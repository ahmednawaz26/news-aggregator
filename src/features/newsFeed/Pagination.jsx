import React from 'react';
import styled from 'styled-components';
import { PAGE_SIZE } from '../../utils/constants';

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

const Button = styled.button`
  background-color: ${({ disabled }) => (disabled ? '#a5b4fc' : '#1e3a8a')};
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 0 5px;
  border-radius: 4px;
  font-size: 16px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#a5b4fc' : '#2563eb')};
  }
`;

const PageNumber = styled.span`
  font-size: 16px;
  color: #1e3a8a;
  margin: 0 10px;
  font-weight: bold;
`;

const Pagination = ({ currentPage, totalResults, onPageChange }) => {
  const totalPages = Math.ceil(totalResults / PAGE_SIZE);

  return (
    <PaginationContainer>
      <Button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        Previous
      </Button>
      <PageNumber>{currentPage}</PageNumber>
      <Button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        Next
      </Button>
    </PaginationContainer>
  );
};

export default Pagination;
