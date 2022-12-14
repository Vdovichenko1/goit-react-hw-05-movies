import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Nav, NavLinkStyle } from './Navigator.styled';
import { PacmanLoader } from 'react-spinners';


export default function Navigator() {
  return (
      <>
      <Nav>
          <NavLinkStyle to='/'>Home</NavLinkStyle>
          <NavLinkStyle to='/movies'>Movies</NavLinkStyle>
      </Nav>
          <Suspense fallback={<PacmanLoader color="black" />}><Outlet /></Suspense>
      </>
  )
}