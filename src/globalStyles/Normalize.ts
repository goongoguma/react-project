import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const Normalize = createGlobalStyle`
  ${normalize};
  
  
  // body {
  //   min-height: 100vh;
  //   background: #141414;
  // }

  a {
    display: block;
    margin: 0;
    padding: 0;
    font-size: 100%;
    background: transparent;
    text-decoration: none;
    cursor: pointer;
    outline: none;

    &:link {
      color: #3090e9;
    }
    
    //&:hover,
    //&:active,
    //&:visited {
    //  color: inherit;
    //}
  }
  
  input,
  textarea {
    appearance: none;
    box-shadow: none;
    box-sizing: border-box;
    margin: 0;
    outline: none;

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px white inset !important;
    }
  }

  textarea {
    overflow-x: hidden;
    overflow-y: auto;
    resize: none;
  }

  p, button {
    padding: 0;
    margin: 0;
    outline: 0;
  }
`;

export default Normalize;
