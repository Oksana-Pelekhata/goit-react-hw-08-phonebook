
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList/';
import { FilterForm } from './FilterForm';
import { Route, Routes } from 'react-router-dom';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import ContactsPage from 'pages/ContactsPage';
import HomePage from 'pages/HomePage';
import Layout from './Layout/Layout';


export const App = () => {

    return (
      <ThemeProvider theme={theme}>
        {/* <ContactForm  />
        <FilterForm
          label="Find contacts by name"
        />
          <ContactList /> */}
        <Routes>
          <Route path="/" element={<Layout />}>
           <Route index element={< HomePage/>} />   
          <Route path='/register' element = {< RegisterPage/>} />
          <Route path='/login' element={< LoginPage />} />
          <Route path='/contacts' element={< ContactsPage />} /> 
            </Route> 
        </Routes>
      </ThemeProvider>
    );
}

