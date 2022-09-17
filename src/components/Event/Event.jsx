import React from "react";
import "./Event.css";
import Button from "@mui/material/Button";

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
            <div className="event__button_logo-date" />
            <p className="event__button_title">{props.date}</p>
          </button>
          <button className="event__button">
            <div className="event__button_logo-geo" />
            <p className="event__button_title">{props.geo}</p>
          </button>
          <button className="event__button">
            <div className="event__button_logo-people" />
            <p className="event__button_title">{props.people}</p>
          </button>
        </div>
        <div className="event__interests">
          <div className="event__interest_wrapper">
            <div className="event__interest">
              <div className="event__button_logo-interest" />
              <p className="event__interest_title">Related interests</p>
            </div>
            <p className="event__interest_subtitle">{props.interest}</p>
          </div>
          <Button variant="contained" color="primary" size="small">SEE MORE</Button>
        </div>
      </div>
    </div>
  );
}

export default Event;

