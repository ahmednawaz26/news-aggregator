import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-transform: uppercase;
  letter-spacing: 2px;
  text-decoration: none;
  color: #ffffff;
`;

const Logo = () => {
  return (
    <div>
      <StyledLink to="/">News Aggregator</StyledLink>
    </div>
  );
};

export default Logo;
