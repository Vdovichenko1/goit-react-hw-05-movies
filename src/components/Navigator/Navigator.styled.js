import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid black;
  box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.75);
  padding: 0px;
  height: 70px;
  margin-bottom: 10px;
`;

export const NavLinkStyle = styled(NavLink)`
  display: inline-block;
  width: 100px;
  height: 30px;
  margin-bottom: 10px;
  text-align: center;
  padding: 5px;
  margin-top: 10px;
  text-decoration: none;
  outline: none;
  border: solid 1px transparent;
  border-radius: 4px;
  &:not(:last-child) {
    margin-right: 20px;
  }
  font-weight: bold;
  font-size: 20px;
  color: black;
  box-shadow: -1px 2px 6px 1px;

  &:hover {
    color: orange;
  }

  &.active {
    color: orange;
    transform: translateY(1px);
  }
`;
