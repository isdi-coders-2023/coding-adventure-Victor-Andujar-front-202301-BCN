const Form = (): JSX.Element => {
  return (
    <form className="register-form">
      <label htmlFor="Email" className="register-form__text">
        Email
      </label>
      <input type="text" className="register-form__input" />
      <label htmlFor="Password" className="register-form__text">
        Password
      </label>
      <input type="text" className="register-form__input" />
      <label htmlFor="Image" className="register-form__text">
        Image
      </label>
      <input type="file" className="register-form__input" />
      <button className="register-form__button">Sign up</button>
    </form>
  );
};

export default Form;
