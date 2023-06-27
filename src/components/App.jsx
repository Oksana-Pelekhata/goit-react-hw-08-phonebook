
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList/';
import { FilterForm } from './FilterForm';
import { Route, Routes } from 'react-router-dom';
import LoginPage from 'pages/LoginPage';
import SignUpPage from 'pages/SignUpPage';
import ContactsPage from 'pages/ContactsPage';


export const App = () => {

    return (
      <ThemeProvider theme={theme}>
        <ContactForm  />
        <FilterForm
          label="Find contacts by name"
        />
          <ContactList />
      </ThemeProvider>
    );
}
<Routes>
    <Route path='/register' element = {< SignUpPage/>} />
    <Route path='/login' element={< LoginPage />} />
    <Route path='/contacts' element={< ContactsPage />} />
  </Routes>
