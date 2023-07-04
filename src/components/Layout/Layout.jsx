import { Outlet } from "react-router-dom"
import { Suspense } from 'react';
import Logo from 'components/Logo/Logo'
import Navigation from 'components/Navigation/Navigation'
import React from 'react'
import { Header, HeaderContainer, LogoCover } from "./Layout.styled";



const Layout = () => {

  return (
    <Header>
      <HeaderContainer>
  <LogoCover>
          <Logo />
    </LogoCover>
          
           
     <Navigation />
    
      </HeaderContainer>
    
  
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
             </Suspense>
    </Header>
  )
}

export default Layout