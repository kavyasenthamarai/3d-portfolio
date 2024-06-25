import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #282c34;  /* Dark blue background */
    color: #ffffff;  /* White text color */
  }

  h1, h2, h3, h4, h5, h6 {
    color: #ff69b4;  /* Pink color for headings */
  }

  a {
    color: #87cefa;  /* Light blue color for links */
  }

  a:hover {
    color: #dda0dd;  /* Light purple color for hovered links */
  }
`;

export default GlobalStyle;
