import { Outlet } from "react-router-dom"
import { Suspense } from 'react';
import Logo from 'components/Logo/Logo'
import Navigation from 'components/Navigation/Navigation'
import React from 'react'

const Layout = () => {
  return (
      <header>
          <Logo />
          <Navigation />
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
             </Suspense>
    </header>
  )
}

export default Layout