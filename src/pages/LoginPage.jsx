import { Container, Stack } from '@mui/system'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { loginThunk } from 'redux/Auth/thunks'
import { Grid, TextField } from '@mui/material'
import {  Button, DivCont } from './RegisterPage.styled'

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loginThunk({ email, password })).unwrap()
			.then(() => {
				toast.success('Welcome')
				// navigate('/contacts')
			})
			.catch(() => {
				console.log("error login")
				toast.error('Error Login')
			})
    }

    const handleChange = ({ target: {name, value}}) => {
        name === "email" ? setEmail(value) : setPassword(value)
    }
  return (
	  <Container maxWidth="sm" >
		  <DivCont>
          <h2>Log In</h2>
          <p>Please, enter your details to get signed in to your account</p>
			  <form onSubmit={handleSubmit}>
		<Grid 
  container
  direction="column"
  justifyContent="center"
				  alignItems="stretch"
				  >
			<Stack spacing={2}>
			<TextField label="Email" variant="outlined"
						name='email'
						type='email'
						size="small"
						onChange={handleChange}
                      value={email}
					/>
					<TextField label="Password" variant="outlined"
						name='password'
						type='password'
						onChange={handleChange}
							  value={password}
							  size="small"
						  /> 
				</Stack> 
			  </Grid>
				<Button style={{marginTop: '20px'}}
					type='submit'
					className='btn btn-primary me-3'
					disabled={!email || !password}
				>
					Login
              </Button>
              <p style={{marginRight: '20px'}}>
                  Don't have an account?
                  <Link style={{marginLeft: '10px'}} to='/register'>Register now</Link>
              </p>
			</form>
		   </DivCont>
		  </Container>
  )
}

export default LoginPage