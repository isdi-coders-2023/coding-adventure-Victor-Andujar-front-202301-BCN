import Button from "../Button/Button";
import FormRegisterStyled from "./FormRegisterStyled";

const FormRegister = (): JSX.Element => {
  return (
    <FormRegisterStyled className="register-form">
      <div className="register-form__section">
        <label
          htmlFor="Email"
          className="register-form__text"
          aria-label="Email"
        >
          Email
        </label>
        <input
          type="email"
          className="register-form__field"
          id="email"
          placeholder="Introduce your email"
          required
        />
      </div>
      <div className="register-form__section">
        <label
          htmlFor="Password"
          className="register-form__text"
          aria-label="Password"
        >
          Password
        </label>
        <input
          type="password"
          className="register-form__field"
          id="password"
          placeholder="Introduce your password"
          required
        />
      </div>
      <div className="register-form__section">
        <label
          htmlFor="Image"
          className="register-form__text"
          aria-label="Profile image"
        >
          Image
        </label>
        <input
          type="file"
          className="register-form__field"
          placeholder="Introduce an image"
        />
      </div>
      <Button text={"Sign up"} />
    </FormRegisterStyled>
  );
};

export default FormRegister;
