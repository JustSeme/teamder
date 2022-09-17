import React from "react";
import "../Teams.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getTeamsThunkCreator,
  pageChangedThunkCreator,
  getFollowThunkCreator,
  getUnfollowThunkCreator,
} from "../../../redux/team-reducer";
import avatar from "../../../images/nonameAvatar.svg";
import Preloader from "../../Preloader/Preloader";
import { useEffect } from "react";
import Button from "@mui/material/Button";

function Team() {
  const dispatch = useDispatch();

  const teams = useSelector((state) => state.teamPage.teams);
  const pagesSize = useSelector((state) => state.teamPage.pagesSize);
  const totalTeamsCount = useSelector((state) => state.teamPage.totalTeamsCount);
  const currentPage = useSelector((state) => state.teamPage.currentPage);
  const isFetching = useSelector((state) => state.teamPage.isFetching);
  // const followLoading = useSelector((state) => state.teamPage.followLoading);

  useEffect(() => {
    dispatch(getTeamsThunkCreator(currentPage, pagesSize));
  }, [currentPage, dispatch, pagesSize]);

  const pagesCount = Math.ceil(totalTeamsCount / pagesSize);

  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const onPageChanged = (pageNumber) => {
    dispatch(pageChangedThunkCreator(pageNumber));
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
                      alt="logo"
                      src={t.photos.small != null ? t.photos.small : avatar}
                    />
                  </a>
                  <div className="team__wrapper">
                    <p className="team__name">{t.name}</p>
                  </div>
                </div>
                <div className="team__wrap_location">
                  {!t.followed ? (
                    <Button
                      variant="contained"
                      color="primary"
                      size="medium"
                      // disabled={followLoading}
                      className="team__follow_button"
                      onClick={() => {
                        dispatch(getFollowThunkCreator(t.id));
                      }}
                    >
                      Follow
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      color="secondary"
                      size="medium"
                      // disabled={followLoading}
                      className="team__unfollow_button"
                      onClick={() => {
                        dispatch(getUnfollowThunkCreator(t.id));
                      }}
                    >
                      Unfollow
                    </Button>
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
                  id="active__color"
                  onClick={() => {
                    onPageChanged(p);
                  }}
                >{p}</span>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
