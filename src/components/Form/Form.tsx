const Form = (): JSX.Element => {
  return (
    <form className="register-form">
      <label htmlFor="Email" className="register-form__text">
        Email
      </label>
      <input
        type="text"
        className="register-form__input"
        placeholder="Introduce your email"
      />
      <label htmlFor="Password" className="register-form__text">
        Password
      </label>
      <input
        type="text"
        className="register-form__input"
        placeholder="Introduce your password"
      />
      <label htmlFor="Image" className="register-form__text">
        Image
      </label>
      <input
        type="file"
        className="register-form__input"
        placeholder="Introduce an image"
      />
      <button className="register-form__button">Sign up</button>
    </form>
  );
};

export default Form;
