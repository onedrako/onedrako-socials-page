import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Lato', sans-serif;
    /* font-family: 'Nunito Sans', sans-serif; */
  }
  body{
    background: #2b2e2e;
    color: #fff; 
    overflow-x: hidden; 
  }
`
export { GlobalStyles }
