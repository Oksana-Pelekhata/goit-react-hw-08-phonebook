import styled from 'styled-components';

export const Div = styled.div`
margin-top: 15px;
margin-bottom: 15px;
`
export const DivCont = styled.div`
margin-top: 20px;
border: 2px solid #33439dcf;
padding: 10px 25px;
// box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const Button = styled.button`
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