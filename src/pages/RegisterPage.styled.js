import styled from 'styled-components';

export const Div = styled.div`
margin-top: 15px;
margin-bottom: 15px;
`
export const DivCont = styled.div`
margin-top: 20px;
border: 2px solid #33439dcf;
padding: 10px 25px;
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const Button = styled.button`
font-family: 'roboto-mono';
font-size: 16px;
margin-right: 20px;
margin-bottom: 10px;
border-radius: 4px;
border: 0;
    text-align: center;
    padding: 5px 10px;
    text-decoration: none;
    letter-spacing: 0.06em;
    background-color: #33439dcf;
    color: white;
    cursor: pointer;
   &: hover {outline: 1px solid black;}
`