import { React, useState } from "react";
import "./Preloader.css";
import loader from "../../images/loader.svg";
import loader2 from "../../images/loader2.svg";

function Loader(props) {
  return (
    <div className="loader">
      <img className="loader__image rotation" src={loader2} alt="loader" />
    </div>
  );
}

export default Loader;
