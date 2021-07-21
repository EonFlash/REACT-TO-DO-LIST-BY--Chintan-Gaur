import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: 0;
    
}

body{
    
    
    
    background: #0F044C;
}

h1{
    font-family: 'Yomogi', cursive;
    color: #787A91;
    
}

button{

    font-family: 'Yomogi', cursive;
    font-size: 1.5 rem;
    font-weight: bold;
    padding: .7rem;
    cursor: pointer;
    color: white;
    background: transparent;
    border-radius: 2rem;
}





`;

export default GlobalStyle;
