import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`


*{ 
    margin:0;
    padding:0;
    box-sizing:border-box;
}


body {
    font-family: 'Bebas Neue', cursive;
}

h2 {
        font-size: 3rem;
        font-family: 'Abril Fatface', cursive;
        font-weight: 400;
    }


    p {
        font-size: 1.2rem;
        line-height:200%;
        color:#2bf1a8;
       
    }


    a {
        text-decoration: none;
        color:#333;
    }
`
export default GlobalStyles
