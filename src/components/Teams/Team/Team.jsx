import React from "react";
import "../Teams.css";
import { useDispatch, useSelector } from "react-redux";
import {
  followActionCreator,
  setCurrentPageActionCreator,
  setTeamsActionCreator,
  unfollowActionCreator,
  toggleIsFetchingActionCreator,
  toggleFollowLoadingActionCreator
} from "../../../redux/team-reducer";
import avatar from "../../../images/nonameAvatar.svg";
import Preloader from "../../Preloader/Preloader";
import {
  getFollow,
  getPageChanged,
  getUnfollow,
  getUsers,
} from "../../../api/api";

function Team() {

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
    dispatch(setCurrentPageActionCreator(pageNumber));
  };
  const toggleIsFetching = (isFetching) => {
    dispatch(toggleIsFetchingActionCreator(isFetching));
  };
  const toggleFollowLoading = (isFetching) => {
    dispatch(toggleFollowLoadingActionCreator(isFetching));
  };

  const teams = useSelector((state) => state.teamPage.teams);
  const pagesSize = useSelector((state) => state.teamPage.pagesSize);
  const totalTeamsCount = useSelector((state) => state.teamPage.totalTeamsCount);
  const currentPage = useSelector((state) => state.teamPage.currentPage);
  const isFetching = useSelector((state) => state.teamPage.isFetching);
  const followLoading = useSelector((state) => state.teamPage.followLoading);

  if (teams.length === 0) {
    toggleIsFetching(true);
    getUsers(currentPage, pagesSize).then((data) => {
      toggleIsFetching(false);
      setTeams(data.items);
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
    getPageChanged(pageNumber, pagesSize).then((data) => {
      toggleIsFetching(false);
      setTeams(data.items);
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
                  <a className="team__link" href={"/profile/" + t.id}>
                    <img
                      className="team__logo"
                      src={t.photos.small != null ? t.photos.small : avatar}
                      alt="logo"
                    />
                  </a>
                  <div className="team__wrapper">
                    <p className="team__name">{t.name}</p>
                  </div>
                </div>
                <div className="team__wrap_location">
                  {!t.followed ? (
                    <button
                      disabled={followLoading}
                      className="team__follow_button"
                      onClick={() => {
                        toggleFollowLoading(true)
                        getFollow(t).then((data) => {
                          if (data.resultCode === 0) {
                            follow(t.id);
                          }
                          toggleFollowLoading(false)
                        });
                      }}
                    >Follow</button>
                  ) : (
                    <button
                      disabled={followLoading}
                      className="team__unfollow_button"
                      onClick={() => {
                        toggleFollowLoading(true)
                        getUnfollow(t).then((data) => {
                          if (data.resultCode === 0) {
                            unfollow(t.id);
                          }
                          toggleFollowLoading(false)
                        });
                      }}
                    >Unfollow</button>
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
                <span
                  className="team__pagination_number"
                  onClick={() => {
                    onPageChanged(p);
                  }}>{p}
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
