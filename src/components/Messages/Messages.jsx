import { React, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Messages.css";
import arrow from "../../images/arrow_left.svg";
import Navigation from "../Navigation/Navigation";
import Hashtags from "../Hashtags/Hashtags";
import MessagePost from "./Message/MessagePost/MessagePost";
import logo from "../../images/profile_logo.svg";

function Messages(props) {
  const [event, setEvent] = useState("CurrentEvent");

  const handleCurrentEventClick = () => {
    setEvent("CurrentEvent");
  };

  const handleCompletedEventClick = () => {
    setEvent("CompletedEvent");
  };

  const activeColorEvent = "home__button_active";

  const inactiveColorEvent = "home__button";

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
          <p className="messages__title">Messages</p>
        </div>
        <MessagePost messagePost={props.messagePost} />
      </div>
      <Hashtags />
    </div>
  );
}

export default Messages;
