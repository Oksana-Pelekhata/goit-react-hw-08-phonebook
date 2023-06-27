import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
      <div>
          <nav>
              <Link to='/register'>Register</Link>
              <Link to='/login'>Login</Link>
              <Link to='/contacts'>Contacts</Link>
          </nav>
    </div>
  )
}

export default Navigation
