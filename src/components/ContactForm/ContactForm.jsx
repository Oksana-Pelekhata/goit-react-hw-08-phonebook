import React from 'react';
import { Section, Title, Form } from "./styled"
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelector } from 'redux/selectors';
import { addContactThunk } from 'redux/contacts/thunks';
import { TextField } from '@mui/material';
import { Button } from 'pages/RegisterPage.styled';


export const ContactForm = () => {

  const { items } = useSelector(contactsSelector)
  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
    e.preventDefault()

    const name = e.target.elements.name.value
    const number = e.target.elements.number.value

    const newContact = {
      name,
      number
    }
    
        if (items.some((contact)=>(contact.name.toLowerCase() === name.toLowerCase()))) {
      return alert(`Contact with the nane ${name} already exists in your contact-list.`);
    }

    if (items.some((contact)=>(contact.number === number))) {
      return alert(`Contact with the number ${number} already exists in your contact-list.`);
    }
    dispatch(addContactThunk(newContact))
    e.target.reset()
  }

    return (
        <Section>
            <Title>Create new contact</Title>
                <Form autoComplete="off" onSubmit={handleSubmit}>
               
            <TextField id="outlined-basic" label="Name" variant="outlined"
						name='name'
						type='text'
              size="small"
             required/>
                 
                    
                   
            <TextField id="outlined-basic" label="Number" variant="outlined"
						name='number'
						type='tel'
              size="small"
             required         />
              
                    <Button type="submit">Add contact</Button>
                </Form>
        </Section>
    )
}

