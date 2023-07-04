import {Section, ContactItem, ContactName } from './styled'
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelector, filterSelector } from 'redux/selectors';
import { useEffect } from 'react';
import { deleteContactThunk, getContactsThunk } from 'redux/contacts/thunks';
import DeleteIcon from '@mui/icons-material/Delete';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton';


export const ContactList = () => {
  const { items, isLoading, error } = useSelector(contactsSelector)

  const dispatch = useDispatch();

  const { filter } = useSelector(filterSelector)
  
  useEffect(()=> {dispatch(getContactsThunk())},[dispatch])

    const filterContacts = () => {
    return items.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    };
  
  const getFilteredContacts = filterContacts()

  const handleDelete = (id) => {
    dispatch(deleteContactThunk(id))
  }

  const theme = createTheme({
  palette: {
    neutral: {
      main: '#33439dcf',
  contrastText: '#fff'
    },
  },
});
  return (
    <Section>
      {error && <h2>{error}</h2>}
      {isLoading && <p>Is loading...</p>}
        {items.length === 0 ? (
          <p>You don't have contacts yet</p>
        ) :
          (<ul> {
            getFilteredContacts.map(({ id, name, number }) => {
              return (
                <ContactItem key={id}>
                  <ContactName>
                    {name}: {number}
                  </ContactName>
                  <ThemeProvider theme={theme}>
 {/* <Button type="button"
                    variant="contained"
                    startIcon={<DeleteIcon />}
                    onClick={() => handleDelete(id)}
                      color='neutral'
                      size='small'
                  >
                  
        
        Delete
                    </Button> */}
                    <IconButton aria-label="delete"
                      onClick={() => handleDelete(id)}
                      color='neutral'
                      size="large">
  <DeleteIcon fontSize="inherit" />
</IconButton>
                  </ThemeProvider>
                </ContactItem>
              );
            })
          }
          </ul>)}
        </Section>
       )
    
}

