import PropTypes from 'prop-types';
import { Section, StyledForm, Title, SectionTitle } from './styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { TextField } from '@mui/material';

export const FilterForm = ({ label }) => {
  const dispatch = useDispatch()

  const handleChange = ({target : {value}}) => {
    dispatch(setFilter(value))
  }
  return (
    <Section>
      <Title>Contacts</Title>
      <StyledForm>
        <SectionTitle>Find contacts by name</SectionTitle>
        <TextField id="filter" label='name' variant="outlined"
						name='filter'
						type='text'
          size="small"
          onChange={handleChange}
        />
      </StyledForm>
    </Section>
  );
};

FilterForm.propTypes = {
  label: PropTypes.string.isRequired,
};