
import React, { lazy, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/Auth/operations';

const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'))
const LoginPage = lazy(() => import('../pages/LoginPage'))
const ContactsPage = lazy(()=> import('../pages/ContactsPage'))


export const App = () => {
const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
      <ThemeProvider theme={theme}>
       
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
              element={<PublicRoute
                redirectTo="/contacts"
                component={<RegisterPage />} />}
          />
          <Route
            path="/login"
              element={<PublicRoute
                redirectTo="/contacts"
                component={<LoginPage />} />}
          />
          <Route
            path="/contacts"
             element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
          />
        </Route>
      </Routes>
      </ThemeProvider>
    );
}
