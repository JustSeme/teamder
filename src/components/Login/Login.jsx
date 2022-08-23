import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import loginImage from "../../images/login_image.svg";
import logoLarge from "../../images/logo_large.svg";

function Login() {
  return (
    <div className="login">
      <div className="login__wrapper">
        <img className="login__image" src={loginImage} alt="login_image" />
      </div>
      <div className="login__wrap">
        <Link to="/">
          <img className="login__logo" src={logoLarge} alt="login_logo" />
        </Link>
        <p className="login__title">Welcome, login to your account!</p>
        <input className="login__input" type="text" placeholder="Login" />
        <input className="login__input" type="text" placeholder="Password" />
        <button className="login__button">Login now</button>
      </div>
    </div>
  );
}

export default Login;
