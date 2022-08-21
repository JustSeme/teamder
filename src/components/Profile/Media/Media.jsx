import { React } from "react";
import "./Media.css";
import instagram from "../../../images/instagram.svg";
import twitter from "../../../images/twitter.svg";
import telegram from "../../../images/telegram.svg";

function Media(props) {
  return (
    <div className="media">
      <div className="media__wrapper">
        <div className="media__wrap">
          <img className="media__image" src={instagram} alt="instagram" />
          <a className="media__link"
          //  href="https://www.instagram.com/strelkovv_/"
          href={props.instagram} target="_blank" rel="noreferrer">Instagram</a>
        </div>
        <div className="media__wrap">
          <img className="media__image" src={twitter} alt="twitter" />
          <a className="media__link"
          // href="https://twitter.com/rod938361647"
          href={props.twitter} target="_blank" rel="noreferrer">Twitter</a>
        </div>
        <div className="media__wrap">
          <img className="media__image" src={telegram} alt="Telegram" />
          <a className="media__link"
          //  href="https://t.me/rodion914"
          href={props.telegram} target="_blank" rel="noreferrer">Telegram</a>
        </div>
      </div>
    </div>
  );
}

export default Media;
