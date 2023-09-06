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
      //color: var(--heading-gray);
      color: #130F49;
   }

   h2{
      //font-family: 'Bebas Neue', 'sans-serif';
      font-family: 'Rubik', 'sans-serif';
      font-size: 3rem;
      text-transform: uppercase;
      color: #130F49;
      //background: -webkit-linear-gradient(291deg, #d281ff, #55B3D0);
    //-webkit-background-clip: text;
    //-webkit-text-fill-color: transparent;
      //letter-spacing: 8px;
   }

   p{
     //color: var(--heading-gray);
   }

`;

export default GlobalStyle;
