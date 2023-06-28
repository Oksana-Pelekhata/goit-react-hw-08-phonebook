import { login } from 'api/users'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { loginThunk } from 'redux/Auth/thunks'

const LoginPage = () => {
    const isAuth = useSelector(state => state.auth.access_token)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loginThunk({email, password}))
    }

    const handleChange = ({ target: {name, value}}) => {
        name === "email" ? setEmail(value) : setPassword(value)
    }

    useEffect(() => {
        isAuth && navigate('/contacts')
    }, [isAuth, navigate])
  return (
    <div >
          <h2>Log In</h2>
          <p>Please, enter your details to get sing in to your account</p>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor='exampleInputEmail1'>
						Email
					</label>
					<input
						name='email'
						type='email'
						id='exampleInputEmail1'
						aria-describedby='emailHelp'
						onChange={handleChange}
                      value={email}
                      placeholder='Enter Email'
					/>
					<div id='emailHelp' className='form-text'>
						We'll never share your email with anyone else.
					</div>
				</div>
				<div>
					<label
						htmlFor='exampleInputPassword1'
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
                      placeholder='password'
					/>
				</div>
				<button
					type='submit'
					className='btn btn-primary me-3'
					disabled={!email || !password}
				>
					Login
              </button>
              <p>
                  Don't have an account?
                  <Link to='/register'>Register now</Link>
              </p>
				
			</form>
		</div>
  )
}

export default LoginPage