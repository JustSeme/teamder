import React from "react";
import "./Teams.css";
import Navigation from "../Navigation/Navigation";
import Hashtags from "../Hashtags/Hashtags";
import arrow from "../../images/arrow_left.svg";
import { Link, NavLink } from "react-router-dom";

function Teams(props) {
  return (
    <div className="teams">
      <Navigation
        classHome={`${"navigation__button"}`}
        classTeams={`${"navigation__button_active"}`}
        classMessages={`${"navigation__button"}`}
        classProfile={`${"navigation__button"}`}
        classHomePath={`${"navigation__inactive"}`}
        classTeamsPath={`${"navigation__active"}`}
        classMessagesPath={`${"navigation__inactive"}`}
        classProfilePath={`${"navigation__inactive"}`}
      />
      <div className="teams__container">
        <div className="teams__wrap">
          <Link to="/" className="teams__wrapper">
            <img className="teams__arrow" src={arrow} alt="arrow" />
            <p className="teams__back">Home</p>
          </Link>
          <p className="teams__title">My teams</p>
        </div>
      </div>
      <Hashtags />
    </div>
  );
}

export default Teams;
