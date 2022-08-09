import { React, useState } from "react";
import "../Teams.css";
import { useDispatch, useSelector } from "react-redux";
import {
  followActionCreator,
  setCurrentPageActionCreator,
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
  const setCurrentPage = (pageNumber) => {
    dispatch(setCurrentPageActionCreator(pageNumber))
  }

  const teams = useSelector((state) => state.teamPage.teams);
  const pagesSize = useSelector((state) => state.teamPage.pagesSize);
  const totalTeamsCount = useSelector((state) => state.teamPage.totalTeamsCount);
  const currentPage = useSelector((state) => state.teamPage.currentPage);

  // const showMoreTeams = () => {
  if (teams.length === 0) {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pagesSize}`)
      .then((res) => {
        setTeams(res.data.items);
      });
  }
  // }

  const pagesCount = Math.ceil(totalTeamsCount / pagesSize);

  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const onPageChanged = (pageNumber) => {
    setCurrentPage(pageNumber);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pagesSize}`)
      .then((res) => {
        setTeams(res.data.items);
      });
  };

  const activeColor = "team__pagination_number-active"
  const inactiveColor = "team__pagination_number"

  return (
    <div>
      {teams.map((t, show) => (
        <>
          <div>
            <div className="team__container">
              <div className="team__wrap">
                <img className="team__logo" src={t.photos.small != null ? t.photos.small : avatar} alt="logo" />
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
                    onClick={() => {follow(t.id)}} className="team__follow_button">Follow</button>
                ) : (
                  <button onClick={() => {unfollow(t.id)}}className="team__unfollow_button">Unfollow</button>
                )}
              </div>
            </div>
          </div>
        </>
      ))}
      <div className="teammap__wrap">
        <div className="team__pagination">
          {pages.map((p) => {
            return (
              <span className="team__pagination_number"
                onClick={() => {onPageChanged(p)}}>{p}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Team;
