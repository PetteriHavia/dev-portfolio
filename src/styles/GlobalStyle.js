import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

   :root{
      --heading-gray:#272341;
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
      font-family: 'Rubik', 'sans-serif';
      color: #130F49;
   }

   h2{
      font-family: 'Rubik', 'sans-serif';
      font-size: 3rem;
      text-transform: uppercase;
      color: #130F49;
   }

   @media (max-width: 600px) {
      h2{
         font-size: 2.5rem;
      }
   }
`;

export default GlobalStyle;
