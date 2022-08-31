import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import loginImage from "../../images/login_image.svg";
import logoLarge from "../../images/logo_large.svg";
import { Form, Field } from "react-final-form";

function Login() {

  const onSubmit = (e) => {};

  const validate = (e) => {};

  return (
    <div className="login">
      <div className="login__wrapper">
        <img className="login__image" src={loginImage} alt="login_image" />
      </div>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <form className="login__wrap" onSubmit={handleSubmit}>
            <Link to="/">
              <img className="login__logo" src={logoLarge} alt="login_logo" />
            </Link>
            <p className="login__title">Welcome, login to your account!</p>
            <Field className="login__input" name="login" component="input" placeholder="Login" />
            <Field className="login__input" name="password" component="input" placeholder="Password" />
            <div className="login__wrapper_submit">
              <div className="login__wrapper_remember">
                <Field className="login__remember" name="rememberMe" component="input" type="checkbox" />
                <p className="login__text">Remember me</p>
              </div>
              <Link className="login__text" to="/">Forgot Password?</Link>
            </div>
            <button className="login__button">Login now</button>
          </form>
        )}
      />
    </div>
  );
}

export default Login;
