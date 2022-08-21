import { React } from "react";
import { Link } from "react-router-dom";
import "./Messages.css";
import arrow from "../../images/arrow_left.svg";
import Navigation from "../Navigation/Navigation";
import Hashtags from "../Hashtags/Hashtags";
import MessagePost from "./Message/MessagePost/MessagePost";

function Messages() {
  return (
    <div className="messages">
      <Navigation
        classHome={`${"navigation__button"}`}
        classTeams={`${"navigation__button"}`}
        classMessages={`${"navigation__button_active"}`}
        classProfile={`${"navigation__button"}`}
        classHomePath={`${"navigation__inactive"}`}
        classTeamsPath={`${"navigation__inactive"}`}
        classMessagesPath={`${"navigation__active"}`}
        classProfilePath={`${"navigation__inactive"}`}
      />
      <div className="messages__container">
        <div className="messages__navigation">
          <Link className="messages__wrapper" to="/">
            <img className="messages__arrow" src={arrow} alt="arrow" />
            <p className="messages__text">Home</p>
          </Link>
          <p className="messages__title">Group messenger</p>
        </div>
        <MessagePost />
      </div>
      <Hashtags />
    </div>
  );
}

export default Messages;
