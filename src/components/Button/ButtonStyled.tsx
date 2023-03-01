import styled from "styled-components";

const ButtonStyled = styled.button`
  width: 20.1875rem;
  height: 2.5rem;
  font-family: var(--main-font);
  font-size: 1.25rem;
  border: none;
  border-radius: 10px;
  background-color: var(--main-color-button);

  :disabled {
    opacity: var(--main-opacity-button-disabled);
  }

  @media (min-width: 800px) {
    width: 20rem;
    height: 3.5625rem;
  }
`;

export default ButtonStyled;
