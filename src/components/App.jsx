
import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
// import { ContactForm } from './ContactForm';
// import { ContactList } from './ContactList/';
// import { FilterForm } from './FilterForm';
import { Route, Routes } from 'react-router-dom';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import ContactsPage from 'pages/ContactsPage';
import HomePage from 'pages/HomePage';
import Layout from './Layout/Layout';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/Auth/operations';


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
           <Route index element={< HomePage/>} />   
            <Route path='/register' element={
              <PublicRoute>
                < RegisterPage />
                </PublicRoute>} />
            <Route path='/login' element={
              <PublicRoute>
              < LoginPage />
              </PublicRoute>
             } />
            <Route path='/contacts' element={
              <PrivateRoute>
 < ContactsPage />
              </PrivateRoute>
             } /> 
            </Route> 
        </Routes>
      </ThemeProvider>
    );
}

