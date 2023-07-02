import { Button } from '@mui/material'
import { ContactForm } from 'components/ContactForm'
import { ContactList } from 'components/ContactList'
import { FilterForm } from 'components/FilterForm'
import React from 'react'
import { useNavigate } from 'react-router-dom'


const ContactsPage = () => {
  const navigate = useNavigate()
  return (
    <>
      <Button onClick={()=>navigate('/') } variant="outlined">Home</Button>
       <ContactForm  />
        <FilterForm label="Find contacts by name"
        />
          <ContactList />
    </>

  )
}

export default ContactsPage