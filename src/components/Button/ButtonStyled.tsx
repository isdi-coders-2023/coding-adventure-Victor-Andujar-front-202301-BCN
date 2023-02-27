import styled from "styled-components";

const ButtonStyled = styled.button`
  width: 20.1875rem;
  height: 2.5rem;
  font-family: "Saira Stencil One";
  font-size: 1.25rem;
  border: none;
  border-radius: 10px;
  background-color: #cccf18;

  :disabled {
    opacity: 0.57;
  }

  @media (min-width: 800px) {
    width: 20rem;
    height: 3.5625rem;
  }
`;

export default ButtonStyled;
