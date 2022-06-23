import React from "react";
import "./Event.css";
import Navigation from "../Navigation/Navigation";
import Hashtags from "../Hashtags/Hashtags";

import date from "../../images/date.svg";
import geo from "../../images/geo2.svg";
import people from "../../images/people.svg";
import interest from "../../images/interest.svg";

function Event(props) {
  return (
    <div className="event">
    <img className="event__logo" src={props.logo} alt="logo" />
      <div className="event__container">
        <div className="event__wrap">
          <div className="event__wrapper_title">
            <p className="event__name">{props.name}</p>
            <p className="event__title">{props.title}</p>
          </div>
        </div>
        <div className="event__buttons">
          <button className="event__button">
            <img className="event__button_logo" src={date} alt="date" />
            <p className="event__button_title">{props.date}</p>
          </button>
          <button className="event__button">
            <img className="event__button_logo" src={geo} alt="geo" />
            <p className="event__button_title">{props.geo}</p>
          </button>
          <button className="event__button">
            <img className="event__button_logo" src={people} alt="people" />
            <p className="event__button_title">{props.people}</p>
          </button>
        </div>
        <div className="event__interests">
          <div className="event__interest_wrapper">
            <div className="event__interest">
              <img className="event__interest_logo" src={interest} alt="interest" />
              <p className="event__interest_title">Related interests</p>
            </div>
            <p className="event__interest_subtitle">{props.interest}</p>
          </div>
          <button className="event__interest_button">SEE MORE</button>
        </div>
      </div>
    </div>
  );
}

export default Event;

