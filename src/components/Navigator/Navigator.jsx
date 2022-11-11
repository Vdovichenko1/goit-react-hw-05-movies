import React from 'react';
import { Outlet } from 'react-router-dom';
import { Nav, NavLinkStyle } from './Navigator.styled';


export default function Navigator() {
  return (
      <>
      <Nav>
          <NavLinkStyle to='/'>Home</NavLinkStyle>
          <NavLinkStyle to='/movies'>Movies</NavLinkStyle>
      </Nav>
          <div><Outlet /></div>
      </>
  )
}