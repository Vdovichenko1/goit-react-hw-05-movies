import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const NavLinkStyle = styled(NavLink)`
  text-decoration: none;
  &:not(:last-child) {
    margin-right: 10px;
  }
  font-weight: bold;
  font-size: 20px;
  color: black;

  &:hover {
    color: orange;
  }
`;
