const Form = (): JSX.Element => {
  return (
    <form className="register">
      <label htmlFor="Email" className="register__text">
        Email
      </label>
      <input type="text" className="register__data" />
      <label htmlFor="Password" className="register__text">
        Password
      </label>
      <input type="password" className="register__data" />
      <label htmlFor="Image" className="register__text">
        Image
      </label>
      <input type="file" className="register__data" />
      <button className="register__button">Sign up</button>
    </form>
  );
};

export default Form;
