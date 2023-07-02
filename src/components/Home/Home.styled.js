import styled from 'styled-components';
import background from '../../images/background.jpeg'

export const MainDiv = styled.section`
outline: 4px solid red;
margin: 0;
width: 100%;
height: 95vh;
padding-left: 15px;
padding-right: 15px;

text-align: center;

background-image: url(${background});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
 max-width: 1200px;

//        @media screen and (min-width: 480px) {
//          max-width: 480px;
//     }
//      @media screen and (min-width: 768px) {
//          max-width: 768px;
//     }
//     @media screen and (min-width: 1200px) {
//         max-width: 1200px;
//  }
`

export const HeroTitle = styled.h1`
margin: 0;
font-family: 'Roboto Mono';
font-weight: 500;
font-size: 40px;
max-width: 680px;

padding-top: 30px;
// margin-top: 40px;
margin-left: auto;
margin-right: auto;
`

export const Span = styled.span`
color: red;`