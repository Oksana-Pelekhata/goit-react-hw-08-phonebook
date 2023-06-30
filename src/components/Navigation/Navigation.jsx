import React from 'react'
import { Link } from 'react-router-dom'
import { NavContainer } from './Navigation.styled'

const Navigation = () => {
  return (
      <NavContainer>
          <nav>
              <Link to='/register'>Register</Link>
              <Link to='/login'>Login</Link>
              <Link to='/contacts'>Contacts</Link>
          </nav>
    </NavContainer>
  )
}

export default Navigation
