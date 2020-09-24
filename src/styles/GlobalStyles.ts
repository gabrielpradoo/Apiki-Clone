import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
  }

  *, button, input {
     font-family: Roboto, sans-serif;
  }

  :root{
     --color-primary: #f57e20;
     --color-secondary: #444242;
     --color-tertiary: #858484;
     --color-quaternary: #33125d;
     --color-white: #ffffff;
  }
`;
