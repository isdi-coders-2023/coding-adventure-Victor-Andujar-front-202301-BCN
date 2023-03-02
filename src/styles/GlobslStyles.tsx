import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*, ::after, ::before {
  box-sizing: border-box;

}

body {
  padding: 30px;
  background-color: var(--background-color);
  font-family: var(--secondary-font);
  width: 100%;
  min-height: 100vh;
  font-size: 62.5%;
  margin: 0;
}

h1,h2{
  padding: 0;
  margin: 0;
}

ol, ul, li {
  list-style: none;
  margin: 0;
  padding: 0;
  text-decoration: none;
}

button{
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-family: inherit;

}

:root {
  --main-color-button: #cccf18;
  --main-color-text: #fff;
  --background-color: #1e1e1e;
  --main-copacity-button-disabled: 57%;
  --main-font: "Saira Stencil One", sans-serif;
  --secondary-font: "Roboto";
}

a, :visited, :active{
text-decoration: none;
}
`;

export default GlobalStyles;
