import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import loginImage from "../../images/login_image.svg";
import logoLarge from "../../images/logo_large.svg";
import { Form, Field } from "react-final-form";
import { maxLengthCreator, required } from "../../utils/validators";

function Login() {

  const onSubmit = (e) => {};

  const maxLength10 = maxLengthCreator(10);

  const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined)

  return (
    <div className="login">
      <div className="login__wrapper">
        <img className="login__image" src={loginImage} alt="login_image" />
      </div>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form className="login__wrap" onSubmit={handleSubmit}>
            <Link to="/">
              <img className="login__logo" src={logoLarge} alt="login_logo" />
            </Link>
            <p className="login__title">Welcome, login to your account!</p>
            <Field 
              className="login__input" 
              name="login" 
              component="input" 
              placeholder="Login" 
              validate={composeValidators(required, maxLength10)} 
            />
            <Field 
              className="login__input" 
              name="password" 
              component="input" 
              placeholder="Password" 
              validate={required}
            />
            <div className="login__wrapper_submit">
              <div className="login__wrapper_remember">
                <Field className="login__remember" name="rememberMe" component="input" type="checkbox" />
                <p className="login__text">Remember me</p>
              </div>
              <Link className="login__text" to="/">Forgot Password?</Link>
            </div>
            <button className="login__button" type="submit">Login now</button>
          </form>
        )}
      />
    </div>
  );
}

export default Login;
