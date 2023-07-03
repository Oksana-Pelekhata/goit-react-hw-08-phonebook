import { useAuth } from 'hooks/useAuth';
import React from 'react'
// import { useSelector } from 'react-redux'
import { Navigate} from 'react-router-dom'

// const PublicRoute = ({ children }) => {
// 	const isAuth = useSelector((state) => state.auth.access_token)
// 	const location = useLocation()
// 	return !isAuth ? children : <Navigate to={location.state ?? '/'} />
// }

// export default PublicRoute

const PublicRoute= ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default PublicRoute