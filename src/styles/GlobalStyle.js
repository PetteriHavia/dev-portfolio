import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

   *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
   }

   body{
      font-family: 'Poppins', 'sans-serif';
      background: ${({ theme }) => theme.body};
      color: ${({ theme }) => theme.text};
   }

   h1{
      font-family: 'Rubik', 'sans-serif';
      color: ${({ theme }) => theme.color.h1_heading};
   }

   h2{
      font-family: 'Rubik', 'sans-serif';
      font-size: 3rem;
      text-transform: uppercase;
   }

   p{
      font-size: 1.1rem;
      color: ${({ theme }) => theme.color.p_text};
   }

   @media (max-width: 600px) {
      h2{
         font-size: 2.5rem;
      }
   }
`;

export default GlobalStyle;
