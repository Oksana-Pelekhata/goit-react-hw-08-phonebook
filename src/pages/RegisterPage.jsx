import { register } from 'api/users'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'



const PegisterPage = () => {
const [password, setPassword] = useState('')
	const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const navigate = useNavigate()
  
  const handleChange = ({ target: { name, value } }) => {
		name === 'email'
			? setEmail(value)
			: name === 'password'
			? setPassword(value)
			: setName(value)
	}
  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log({ name, password, email })
    register({
      name, email, password,
    }).then(navigate('/login'))
  }
  return (
   <div className='container p-4'>
			<h2>Register</h2>
			<form onSubmit={handleSubmit}>
				<div className='mb-3'>
					<label htmlFor='exampleInputName' className='form-label'>
						Name:
					</label>
					<input
						name='name'
						type='text'
						className='form-control'
						id='exampleInputName'
						aria-describedby='emailHelp'
						onChange={handleChange}
						value={name}
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='exampleInputEmail1' className='form-label'>
						Email address
					</label>
					<input
						name='email'
						type='email'
						className='form-control'
						id='exampleInputEmail1'
						aria-describedby='emailHelp'
						onChange={handleChange}
						value={email}
					/>
					<div id='emailHelp' className='form-text'>
						We'll never share your email with anyone else.
					</div>
				</div>
				<div className='mb-3'>
					<label
						htmlFor='exampleInputPassword1'
						className='form-label'
					>
						Password
					</label>
					<input
						name='password'
						type='password'
						className='form-control'
						id='exampleInputPassword1'
						onChange={handleChange}
						value={password}
					/>
				</div>
				<button
					type='submit'
					className='btn btn-primary me-3'
					disabled={!email || !password || !name}
				>
					Register
				</button>
				<Link to='/login'>Log In</Link>
			</form>
		</div>
    
  )
}

export default PegisterPage