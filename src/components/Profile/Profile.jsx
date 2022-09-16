import React, { useState, useEffect } from "react";
import "./Profile.css";
import { Link, useParams } from "react-router-dom";
import Popup from "../Popup/Popup";
import arrow from "../../images/arrow_left.svg";
import Navigation from "../Navigation/Navigation";
import Hashtags from "../Hashtags/Hashtags";
import ProfilePosts from "./Posts/Profile/ProfilePosts";
import Media from "./Media/Media";
import { useDispatch, useSelector } from "react-redux";
import { getProfileUserThunkCreator } from "../../redux/profile-reducer";
import Preloader from "../Preloader/Preloader";
import avatar from "../../images/nonameAvatar.svg";

function Profile() {
  const [post, setPost] = useState("ProfilePosts");

  const handleProfilePostsClick = () => {
    setPost("ProfilePosts");
  };

  const handleProfileMediaClick = () => {
    setPost("SocialMedia");
  };

  const activeColorPost = "profile__button_post";
  const inactiveColorPost = "profile__button_post-color";

  const [isPopup, setIsPopup] = useState(false);

  const dispatch = useDispatch();

  const profileUser = useSelector((state) => state.profilePage.profile);
  const isFetching = useSelector((state) => state.profilePage.isFetching);

  const params = useParams();

  useEffect(() => {
    let userId = params.userId;
    if (profileUser.length === 0) {
      dispatch(getProfileUserThunkCreator(userId));
    }
  })

  return (
    <div className="profile">
      <Navigation
        classHome={`${"navigation__button"}`}
        classTeams={`${"navigation__button"}`}
        classMessages={`${"navigation__button"}`}
        classProfile={`${"navigation__button_active"}`}
        classHomePath={`${"navigation__inactive"}`}
        classTeamsPath={`${"navigation__inactive"}`}
        classMessagesPath={`${"navigation__inactive"}`}
        classProfilePath={`${"navigation__active"}`}
      />
      {isFetching ? <Preloader /> : null}
      <div className="profile__container">
        <div className="profile__wrap">
          <Link to="/" className="profile__wrapper">
            <img className="profile__arrow" src={arrow} alt="arrow" />
            <p className="profile__back">Home</p>
          </Link>
          <p className="profile__title">My profile</p>
        </div>
        <div className="profile__information_wrap">
          <div className="profile__information_wrapper">
            <img
              className="profile__logo"
              src={profileUser && profileUser.photos && profileUser.photos.small
                  ? profileUser &&
                    profileUser.photos &&
                    profileUser.photos.small
                  : avatar
                }
              alt="logo"
            />
            <div className="profile__wrap_name">
              <div className="profile__wrapper_name">
                <p className="profile__name_title">{profileUser.fullName}</p>
              </div>
              <p className="profile__name_subtitle">@{profileUser.userId}</p>
            </div>
          </div>
          <div className="profile__buttons_wrap">
            <div className="profile__buttons_wrapper">
              <div className="profile__description_wrapper">
                <div className="profile__image_desc" />
                <p className="profile__description_title">Description:</p>
              </div>
              <p className="profile__description">{profileUser.aboutMe}</p>
            </div>
            <div className="profile__buttons_wrapper">
              <div className="profile__description_wrapper">
                <div className="profile__image_job" />
                <p className="profile__description_title">Job search:</p>
              </div>
              <p className="profile__description">
                {profileUser.lookingForAJobDescription}
              </p>
            </div>
          </div>
        </div>
        <div className="profile__button_wrapper">
          <button
            className={
              post === "ProfilePosts" ? inactiveColorPost : activeColorPost
            }
            onClick={handleProfilePostsClick}
          >
            Page posts
          </button>
          <button
            className={
              post === "SocialMedia" ? inactiveColorPost : activeColorPost
            }
            onClick={handleProfileMediaClick}
          >
            Social Media
          </button>
        </div>
        {post === "ProfilePosts" && <ProfilePosts />}
        {post === "SocialMedia" && (
          <Media
            instagram={profileUser.contacts.instagram}
            twitter={profileUser.contacts.twitter}
            telegram={profileUser.contacts.telegram}
          />
        )}
        {isPopup === "popupEdit" && <Popup close={setIsPopup} />}
      </div>
      <Hashtags />
    </div>
  );
}

export default Profile;
