import React from 'react'

import { NavButton, NavContainer } from './Navigation.styled'
import { useSelector } from 'react-redux'
import UserMenu from 'components/UserMenu/UserMenu'

import { Stack } from '@mui/system'

const Navigation = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  return (
      <NavContainer>
      <nav>
        <Stack direction="row" spacing={3}>
        {!isLoggedIn && <NavButton  to='/register' >Register</NavButton>}
        {!isLoggedIn? <NavButton to='/login'>Login</NavButton> : <UserMenu />}
        {isLoggedIn && <NavButton to='/contacts'>Contacts</NavButton>}
        </Stack>
          </nav>
    </NavContainer>
  )
}

export default Navigation
