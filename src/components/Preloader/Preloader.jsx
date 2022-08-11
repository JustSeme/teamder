import { React, useState } from "react";
import "./Preloader.css";
import loader from "../../images/loader.svg";

function Loader(props) {
  return (
    <div className="loader">
      <img className="loader__image rotation" src={loader} alt="loader" />
    </div>
  );
}

export default Loader;
