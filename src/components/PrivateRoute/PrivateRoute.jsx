// import { useSelector } from 'react-redux'
import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom'

// const PrivateRoute = ({ children }) => {
// 	const isAuth = useSelector((state) => state.auth.access_token)
// 	const location = useLocation()
// 	return isAuth ? children : <Navigate to='/login' state={location} />
// }

// export default PrivateRoute

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute 