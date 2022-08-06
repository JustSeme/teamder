import { React, useState } from "react";
import "../Teams.css";
import { useDispatch, useSelector } from "react-redux";
import {
  followActionCreator,
  setTeamsActionCreator,
  unfollowActionCreator,
} from "../../../redux/team-reducer";
import * as axios from "axios";
import avatar from "../../../images/nonameAvatar.svg";

function Team(props) {
  const dispatch = useDispatch();

  const follow = (teamID) => {
    dispatch(followActionCreator(teamID));
  };
  const unfollow = (teamID) => {
    dispatch(unfollowActionCreator(teamID));
  };
  const setTeams = (teams) => {
    dispatch(setTeamsActionCreator(teams));
  };

  const teams = useSelector((state) => state.teamPage.teams);

  // const showMoreTeams = () => {
    if (teams.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((res) => {
          setTeams(res.data.items);
        });
    }
  // }

  return (
    <div>
      {teams.map((t, show) => (
        <>
          <div>
            <div className="team__container">
              <div className="team__wrap">
                <img className="team__logo" src={ t.photos.small != null ? t.photos.small : avatar} alt="logo" />
                <div className="team__wrapper">
                  <div className="team__wrapper_name">
                    <p className="team__name">{t.name}</p>
                    <p className="team__login">{t.login}</p>
                  </div>
                  <p className="team__message">{t.desc}</p>
                </div>
              </div>
              <div className="team__wrap_location">
                {!t.followed ? (
                  <button
                    onClick={() => {
                      follow(t.id);
                    }}
                    className="team__follow_button"
                  >
                    Follow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      unfollow(t.id);
                    }}
                    className="team__unfollow_button"
                  >
                    Unfollow
                  </button>
                )}
              </div>
            </div>
          </div>
        </>
      ))}
      <div className="teammap__wrap">
        {/* <button className="teammap__button_show" onClick={showMoreTeams}>
          Show more
        </button> */}
        <div className="team__pagination">
          <span className="team__pagination_number">1</span>
          <span className="team__pagination_number">2</span>
          <span className="team__pagination_number">3</span>
          <span className="team__pagination_number">4</span>
          <span className="team__pagination_number">5</span>
        </div>
      </div>
    </div>
  );
}

export default Team;
