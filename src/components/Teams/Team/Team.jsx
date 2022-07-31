import { React, useState } from "react";
import "../Teams.css";
import { useDispatch, useSelector } from "react-redux";
import {
  followActionCreator,
  setTeamsActionCreator,
  unfollowActionCreator,
} from "../../../redux/team-reducer";

function Team(props) {
  const dispatch = useDispatch();

  let toggleFollow = () => {
    return {
      follow: (teamID) => {
        dispatch(followActionCreator(teamID));
      },
      unfollow: (teamID) => {
        dispatch(unfollowActionCreator(teamID));
      },
      setTeams: (teams) => {
        dispatch(setTeamsActionCreator(teams));
      },
    };
  };

  const teams = useSelector((state) => state.teamPage.teams);

  return (
    <div>
      {teams.map((t) => (
        <>
          <div>
            <div className="team__container">
              <div className="team__wrap">
                <img className="team__logo" src={t.avatar} alt="logo" />
                <div className="team__wrapper">
                  <div className="team__wrapper_name">
                    <p className="team__name">{t.name}</p>
                    <p className="team__login">{t.login}</p>
                  </div>
                  <p className="team__message">{t.desc}</p>
                </div>
              </div>
              <div className="team__wrap_location">
                {
                t.followed ? 
                <button className="team__follow_button">Follow</button>
                :
                <button className="team__unfollow_button">Unfollow</button>
                }
              </div>
            </div>
          </div>
        </>
      ))}
      <div className="teammap__wrap">
        <button className="teammap__button_show">Show more</button>
      </div>
    </div>
  );
}

export default Team;
