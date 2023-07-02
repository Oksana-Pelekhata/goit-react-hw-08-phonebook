
import { ContactForm } from 'components/ContactForm'
import { ContactList } from 'components/ContactList'
import { FilterForm } from 'components/FilterForm'
import React from 'react'



const ContactsPage = () => {
  
  return (
    <>
       <ContactForm  />
        <FilterForm label="Find contacts by name"
        />
          <ContactList />
    </>

  )
}

export default ContactsPage