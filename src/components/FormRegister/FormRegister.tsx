const FormRegister = (): JSX.Element => {
  return (
    <form className="register-form">
      <label htmlFor="Email" className="register-form__text">
        Email
      </label>
      <input type="email" className="register-form__field" id="email" />
      <label htmlFor="Password" className="register-form__text">
        Password
      </label>
      <input type="password" className="register-form__field" id="password" />
      <label htmlFor="Image" className="register-form__text">
        Image
      </label>
      <input type="file" className="register-form__field" />
      <button className="register-form__button">Sign up</button>
    </form>
  );
};

export default FormRegister;
