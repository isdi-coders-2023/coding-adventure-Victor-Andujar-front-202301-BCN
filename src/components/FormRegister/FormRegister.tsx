const FormRegister = (): JSX.Element => {
  return (
    <form className="register-form">
      <label htmlFor="Email" className="register-form__text">
        Email
      </label>
      <input type="email" className="register-form__credentials" id="Email" />
      <label htmlFor="Password" className="register-form__text">
        Password
      </label>
      <input
        type="password"
        className="register-form__credentials"
        id="Password"
      />
      <label htmlFor="Image" className="register-form__text">
        Image
      </label>
      <input type="file" className="register-form__credentials" />
      <button className="register__button">Sign up</button>
    </form>
  );
};

export default FormRegister;
