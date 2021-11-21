import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
  
  list-style: none;
  box-sizing: border-box;
  text-decoration: none; 
  color: black;
}
 ::after, ::before {
  box-sizing: border-box;
}

body{
  color:#fff;
  font-family:Verdana;
  background-color:#fff;
  
}

`;

export default GlobalStyle;