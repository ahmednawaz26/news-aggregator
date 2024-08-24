import styled from 'styled-components';
import Logo from './Logo';
import SearchBar from '../features/search/SearchBar';
import { HiOutlineCog8Tooth } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
  background-color: #2563eb;
  padding: 20px 40px;
  border-bottom: 1px solid #1e3a8a;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const StyledHiOutlineCog8Tooth = styled(HiOutlineCog8Tooth)`
  width: 30px;
  height: 30px;
  color: #ffffff;
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Div>
        <SearchBar />
        <Link to="settings">
          <StyledHiOutlineCog8Tooth />
        </Link>
      </Div>
    </StyledHeader>
  );
}

export default Header;
