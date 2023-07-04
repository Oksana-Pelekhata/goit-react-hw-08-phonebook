import styled from 'styled-components';

export const Section = styled.section
`
padding: 15px 30px;
// margin-top: 40px;
`

export const Title = styled.h2`
font-size: ${({theme}) => theme.fontSizes.large};
margin: 20px;
`;

export const Item = styled.li`
font-size: ${({ theme }) => theme.fontSizes.medium};
margin-bottom: 15px;
`

// export const ContactButton = styled.button`
//   background-color: #00aeef;
// //   color: white;
//   padding: 8px 12px;
// `
export const ContactName = styled.p`
margin: 0;
  margin-right: 10px;
  display: inline-block;
`;

export const ContactItem = styled.li`
// display: flex;
font-size: ${({ theme }) => theme.fontSizes.medium};
// margin-bottom: 15px;
`
export const ContactButton = styled.button`
display: inline-block;
  background-color: #db0a0ab5 ;
  padding: 5px 12px;
  border: none;
  border-radius: 4px;
  margin-left: auto;
  height: 24px;
  `