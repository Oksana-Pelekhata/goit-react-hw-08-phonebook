// import { dellToken } from 'api/users'
import React from 'react'
import { useDispatch, } from 'react-redux'
// import { logoutThunk } from 'redux/Auth/thunks'
import { Div, Text } from './UserMenu.styled'
import { Button } from 'pages/RegisterPage.styled'
import { logOut } from 'redux/Auth/operations'
import { useAuth } from 'hooks/useAuth'

const UserMenu = () => {
  const { user } = useAuth()
  // const mail = useSelector(state => state.auth.profile.email)
  const dispatch = useDispatch()
  const handleLogOut = () => {
    dispatch(logOut())
	
  }
  return (
  <Div>
  <Text>{user.email}</Text>
  <Button type='submit' onClick={handleLogOut}>Logout</Button>
</Div>
  )
}

export default UserMenu