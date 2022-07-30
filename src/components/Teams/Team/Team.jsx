import { React, useState } from "react";
import { Link } from "react-router-dom";
import lala from "../../../images/profile_logo3.svg";
import "../Teams.css";

function Team(props) {
  return (
    <div>
      <div className="team__container">
        <div className="team__wrap">
          <img className="team__logo" src={lala} alt="logo" />
          <div className="team__wrapper">
            <div className="team__wrapper_name">
              <p className="team__name">Slime Jesus</p>
              <p className="team__login">@slimeee</p>
            </div>
            <p className="team__message">This is description, check my profile bro.</p>
          </div>
        </div>
        <div className="team__wrap_location">
          <p className="team__city">Tokyo</p>
          <p className="team__country">Japan</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
