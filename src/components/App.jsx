
import React from 'react';
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


export const App = () => {

    return (
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

