import { React } from "react";
import "./Preloader.css";
// import loader2 from "../../images/loader2.svg";
import CircularProgress from '@mui/material/CircularProgress';

function Loader(props) {
  return (
    <div className="loader">
      {/* <img className="loader__image rotation" src={loader2} alt="loader" /> */}
      <CircularProgress disableShrink color="secondary" />
    </div>
  );
}

export default Loader;
