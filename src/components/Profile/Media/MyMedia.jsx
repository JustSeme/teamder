import { React } from "react";
import "./Media.css";

function MyMedia() {
  return (
    <div className="media">
      <div className="media__wrapper">
        <div className="media__wrap">
          <div className="media__image_inst" />
          <a
            className="media__link"
            href="https://www.instagram.com/strelkovv_/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
        <div className="media__wrap">
        <div className="media__image_twt" />
          <a
            className="media__link"
            href="https://twitter.com/rod938361647"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </div>
        <div className="media__wrap">
        <div className="media__image_tg" />
          <a
            className="media__link"
            href="https://t.me/rodion914"
            target="_blank"
            rel="noreferrer"
          >
            Telegram
          </a>
        </div>
      </div>
    </div>
  );
}

export default MyMedia;
