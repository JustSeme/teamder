import { React, useState } from "react";
import { Link } from "react-router-dom";
import "../Teams.css";
import { useDispatch, useSelector } from "react-redux";
import {
  followActionCreator,
  setCurrentPageActionCreator,
  setTeamsActionCreator,
  unfollowActionCreator,
  toggleIsFetchingActionCreator
} from "../../../redux/team-reducer";
import * as axios from "axios";
import avatar from "../../../images/nonameAvatar.svg";
import Preloader from "../../Preloader/Preloader";

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
  const toggleIsFetching = (isFetching) => {
    dispatch(toggleIsFetchingActionCreator(isFetching))
  }

  const teams = useSelector((state) => state.teamPage.teams);
  const pagesSize = useSelector((state) => state.teamPage.pagesSize);
  const totalTeamsCount = useSelector((state) => state.teamPage.totalTeamsCount);
  const currentPage = useSelector((state) => state.teamPage.currentPage);
  const isFetching = useSelector((state) => state.teamPage.isFetching);

  if (teams.length === 0) {
    toggleIsFetching(true)
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pagesSize}`, {
        withCredentials: true
      })
      .then((res) => {
        toggleIsFetching(false);
        setTeams(res.data.items);
      });
  }

  const pagesCount = Math.ceil(totalTeamsCount / pagesSize);

  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const onPageChanged = (pageNumber) => {
    toggleIsFetching(true);
    setCurrentPage(pageNumber);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pagesSize}`, {
        withCredentials: true
      })
      .then((res) => {
        toggleIsFetching(false);
        setTeams(res.data.items);
      });
  };

  return (
    <>
    {isFetching ? <Preloader /> : null}
    <div>
      {teams.map((t) => (
        <>
          <div>
            <div className="team__container">
              <div className="team__wrap">
                <a className="team__link" href={'/profile/' + t.id}>
                  <img className="team__logo" src={t.photos.small != null ? t.photos.small : avatar} alt="logo" />
                </a>
                <div className="team__wrapper">
                  <p className="team__name">{t.name}</p>
                </div>
              </div>
              <div className="team__wrap_location">
                {!t.followed ? (
                  <button className="team__follow_button"
                    onClick={() => {

                      axios
                      .post(`https://social-network.samuraijs.com/api/1.0/follow/${t.id}`, {}, {
                        withCredentials: true,
                        headers: {
                          "API-KEY": "d4878b37-1aef-4815-a34a-d57f7a9e40c9"
                        }
                      })
                      .then((res) => {
                        if(res.data.resultCode === 0) {
                          follow(t.id);
                        }
                      })

                    }}>Follow</button>
                ) : (
                  <button className="team__unfollow_button"
                    onClick={() => {
                      
                      axios
                      .delete(`https://social-network.samuraijs.com/api/1.0/follow/${t.id}`, {
                        withCredentials: true,
                        headers: {
                          "API-KEY": "d4878b37-1aef-4815-a34a-d57f7a9e40c9"
                        }
                      })
                      .then((res) => {
                        if(res.data.resultCode === 0) {
                          unfollow(t.id);
                        }
                      })

                  }}>Unfollow</button>
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
    </>
  );
}

export default Team;
