import { React, useState } from "react";
import { Link } from "react-router-dom";
import "../Teams.css";

function Team(props) {
  return (
    <div>
      <div className="team__container">
        <div className="team__wrap">
          <img className="team__logo" src={props.avatar} alt="logo" />
          <div className="team__wrapper">
            <p className="team__name">{props.name}</p>
            <p className="team__message">{props.message}</p>
          </div>
        </div>
        <div className="team__wrap_time">
          <p className="team__time">{props.time}</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
