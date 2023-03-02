import styled from "styled-components";

const FormRegisterStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 76px;
  align-items: center;
  justify-content: center;

  .register-form {
    &__section {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    &__field {
      width: 20.3125rem;
      height: 2.5rem;
      border-radius: 8px;
      border: 1px solid #fff;
      color: #fff;

      ::placeholder {
        color: #000;
      }
    }

    &__text {
      font-weight: 700;
      font-size: 16px;
      color: #fff;
    }
  }
`;

export default FormRegisterStyled;
