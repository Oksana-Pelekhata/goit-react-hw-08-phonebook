import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
// import { registerThunk } from 'redux/Auth/thunks'
// import { toast } from 'react-hot-toast'
import { Container, Stack } from '@mui/system'
import {  Grid, TextField } from '@mui/material'
import { Div, Button, DivCont } from './RegisterPage.styled'
import { register } from 'redux/Auth/operations'


const PegisterPage = () => {
// const [password, setPassword] = useState('')
// 	const [email, setEmail] = useState('')
//   const [name, setName] = useState('')
//   const dispatch = useDispatch()
// //   const navigate = useNavigate()
  
//   const handleChange = ({ target: { name, value } }) => {
// 		name === 'email'
// 			? setEmail(value)
// 			: name === 'password'
// 			? setPassword(value)
// 			: setName(value)
// 	}
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log({ name, password, email })
// 	  dispatch(register({ name, password, email }))
// 		//   .unwrap()
// 		//  .then(() => {
// 		// 	 navigate('/login')
// 		// 	 toast.success('Sign Up successfully!!')
// 		//  })
// 		//  .catch(() => {
// 		// 	 toast.error("Registration failed")
// 		// 	 console.log("error register")
// 		//  })
// 	  e.currentTarget.reset();
//   }

  return (
	  <Container maxWidth="sm" >
		  <DivCont>
			  
		  
			<h2>Register</h2>
			  <form
				//   onSubmit={handleSubmit}
			  >
			  <Grid 
  container
  direction="column"
  justifyContent="center"
				  alignItems="stretch"
				  
			  >
				  <Stack spacing={2}>
					  
				 
				<TextField id="outlined-basic" label="Name" variant="outlined" 
						name='name'
						type='text'
						className='form-control'
						aria-describedby='emailHelp'
						// onChange={handleChange}
						// 	  value={name}
							  size="small"
					 
				  />	
				<TextField id="outlined-basic" label="Email" variant="outlined"
						name='email'
						type='email'
						
						
						
					// 	onChange={handleChange}
					//   value={email}
					  size='small'
				  />  
				  <TextField id="outlined-basic" label="Password" variant="outlined"
						name='password'
						type='password'
						className='form-control'
					// 	onChange={handleChange}
					//   value={password}
					  size='small'
					  />
					   </Stack>
</Grid>
				
					<Div>
						We'll never share your personal data with anyone else.
					</Div>
				
			
				<Button variant="contained" color='blue'
					// type='submit'
					// disabled={!email || !password || !name}
				>
					Register
				</Button>
				<Link to='/login'>Log In</Link>
			  </form>
			  </DivCont>
		</Container>
    
  )
}

export default PegisterPage

// email: "ok.soloviova@gmail.com"
// name: "oksana"
// password: "nach111"