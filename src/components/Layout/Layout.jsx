import { Outlet } from "react-router-dom"
import { Suspense } from 'react';
import Logo from 'components/Logo/Logo'
import Navigation from 'components/Navigation/Navigation'
import React from 'react'
import UserMenu from "components/UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { Header, HeaderContainer, LogoCover } from "./Layout.styled";


const Layout = () => {
  const { access_token: isAuth } = useSelector(state => state.auth)
  
  return (
    <Header>
      <HeaderContainer>
  <LogoCover>
          <Logo />
    </LogoCover>
          {isAuth ?
            <UserMenu/>
    : <Navigation /> }
    
      </HeaderContainer>
    
  
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
             </Suspense>
    </Header>
  )
}

export default Layout