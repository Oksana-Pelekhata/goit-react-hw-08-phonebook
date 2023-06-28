import styled from 'styled-components';

export const MainDiv = styled.section`
width: 100%;
padding-left: 15px;
padding-right: 15px;
margin: 0 auto;
text-align: center;
background-image: url("../../images/background.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

       @media screen and (min-width: 480px) {
         max-width: 480px;
    }
     @media screen and (min-width: 768px) {
         max-width: 768px;
    }
    @media screen and (min-width: 1200px) {
        max-width: 1200px;
 }
`

export const HeroTitle = styled.h1`
font-family: 'Roboto Mono';
font-weight: 500;
`