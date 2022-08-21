import { React } from "react";
import "../Messages.css";

function Message(props) {
  return (
    <div>
      <div className="message__container">
        <div className="message__wrap">
          <img className="message__logo" src={props.avatar} alt="logo" />
          <div className="message__wrapper">
            <div className="message__wrapper_name">
              <p className="message__name">{props.name}</p>
              <p className="message__status">{props.status}</p>
            </div>
            <p className="message__message">{props.message}</p>
          </div>
        </div>
        <div className="message__wrap_time">
          <p className="message__time">{props.time}</p>
        </div>
      </div>
    </div>
  );
}

export default Message;
