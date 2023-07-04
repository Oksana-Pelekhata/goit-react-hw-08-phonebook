import { dellToken } from 'api/users'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutThunk } from 'redux/Auth/thunks'
import { Div, Text } from './UserMenu.styled'
import { Button } from 'pages/RegisterPage.styled'

const UserMenu = () => {
  const mail = useSelector(state => state.auth.profile.email)
  const dispatch = useDispatch()
  const handleLogOut = () => {
    dispatch(logoutThunk())
		dellToken()
  }
  return (
  <Div>
  <Text>{user.email}</Text>
  <Button style={{marginBottom: 0}} type='submit' onClick={handleLogOut}>Logout</Button>
</Div>
  )
}

export default UserMenu