import styled from 'styled-components';

export const Section = styled.section`
  padding: 15px 30px;
  
`;
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 250px;
  margin-left: 20px;
  gap: 20px;
  padding: 20px 15px;
  border: 2px solid #33439dcf;
// padding: 25px 10px 15px 10px;
border-radius: 6px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
export const Label = styled.label`
  display: block;
`;

export const SectionTitle = styled.h3`
margin: 0
`

export const Input = styled.input`
  border: 1px solid black;
  display: block;
  margin-top: 10px;
  color: black;
`;

export const Button = styled.button`
  width: 100px;
  display: block;
  cursor: pointer;
  padding: 5px 10px;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.large};
  margin: 20px;
`;