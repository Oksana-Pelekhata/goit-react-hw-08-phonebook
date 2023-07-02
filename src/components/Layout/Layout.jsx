import { Outlet } from "react-router-dom"
import { Suspense, useEffect } from 'react';
import Logo from 'components/Logo/Logo'
import Navigation from 'components/Navigation/Navigation'
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Header, HeaderContainer, LogoCover } from "./Layout.styled";
import { getProfileThunk, logoutThunk } from "redux/Auth/thunks";
import { setToken } from "api/users";


const Layout = () => {
  const { access_token, profile } = useSelector(state => state.auth)
  const dispatch = useDispatch()

useEffect(() => {
		if (access_token && !profile) {
			setToken(access_token)
			dispatch(getProfileThunk())
				.unwrap()
				.catch(() => dispatch(logoutThunk()))
		}
	}, [access_token, dispatch, profile])
  
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