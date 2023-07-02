// import { Button } from '@mui/material';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

export const NavButton = styled(NavLink)`
// display: inline-block;
    border-radius: 4px;
    text-align: center;
    // border: 0;
    //  min-width: 100px;
    padding: 5px 10px;
    text-decoration: none;
    

    font-family: inherit;
    font-weight: 700;
    font-size: 16px;
    
    letter-spacing: 0.06em;
    background-color: #33439dcf;
    color: white;
    cursor: pointer;
   &: hover {
background-color: #db0a0ab5;}
    
`
export const NavContainer = styled.nav`
display: flex;
flex-wrap: wrap;
font-size: 26px;

`