import React from 'react'
import { useDispatch } from 'react-redux'
import { Div, Text } from './UserMenu.styled'
import { Button } from 'pages/RegisterPage.styled'
import { useAuth } from 'hooks/useAuth'
import { logOut } from 'redux/Auth/operations'

const UserMenu = () => {
  const { user } = useAuth()
  const dispatch = useDispatch()
 
  return (
  <Div>
  <Text>{user.email}</Text>
  <Button style={{marginBottom: 0}} type='submit' onClick={() => dispatch(logOut())}>Logout</Button>
</Div>
  )
}

export default UserMenu