import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

   :root{
      --heading-gray:#616161;
      --white: #FFF;
      --orange: #FF6224;
      --lg-blue: #55B3D0;
      --dg-purple: #383873;

   }

   *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
   }

   body{
      font-family: 'Poppins', 'sans-serif';

   }

   h1{
      font-family: 'Bebas Neue', 'sans-serif';
      letter-spacing: 8px;
   }

   h2{
      font-family: 'Bebas Neue', 'sans-serif';
      font-size: 3.5rem;
      color: var(--heading-gray);
      letter-spacing: 8px;
   }

   p{
     //color: var(--heading-gray);
   }

`;

export default GlobalStyle;
