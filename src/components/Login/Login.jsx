import React from "react";
import { Link, Navigate } from "react-router-dom";
import "./Login.css";
import loginImage from "../../images/login_image.svg";
import logoLarge from "../../images/logo_large.svg";
import { Form, Field } from "react-final-form";
import { maxLengthCreator, required, minLengthCreator } from "../../utils/validators";
import { loginThunkCreator } from "../../redux/auth-reducer";
import { useDispatch, useSelector } from "react-redux";

function Login() {

  const dispatch = useDispatch();

  const loginPost = (email, password, rememberMe) => {
    dispatch(loginThunkCreator(email, password, rememberMe));
  };

  const isAuth = useSelector((state) => state.auth.isAuth);

  const onSubmit = (values) => {
    loginPost(values.email, values.password, values.rememberMe);
  };

  const maxLength20 = maxLengthCreator(20);

  const minLength3 = minLengthCreator(3);

  const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined)

  if (isAuth) {
    return <Navigate to="/" />
  };

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
              name="email" 
              validate={composeValidators(required, maxLength20, minLength3)}
            >
              {({ input, meta }) => (
                <>
                  <input {...input} className="login__input" placeholder="Email" type="text" />
                  {meta.error && meta.touched && <span className="error__span">{meta.error}</span>}
                </>
              )}
            </Field>
            <Field
              name="password" 
              validate={composeValidators(required, minLength3)}
            >
              {({ input, meta }) => (
                <>
                  <input {...input} className="login__input" placeholder="Password" type="password" />
                  {meta.error && meta.touched && <span className="error__span">{meta.error}</span>}
                </>
              )}
            </Field>
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
