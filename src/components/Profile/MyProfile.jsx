import React, { useState} from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import Popup from "../Popup/Popup";
import arrow from "../../images/arrow_left.svg";
import Navigation from "../Navigation/Navigation";
import Hashtags from "../Hashtags/Hashtags";
import ProfilePosts from "./Posts/Profile/ProfilePosts";
import profileAvatar from "../../images/profile_logo2.svg";
import edit from "../../images/edit.svg";
import MyMedia from "./Media/MyMedia";

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
  const handlePopupClick = () => {
    setIsPopup("popupEdit");
  };

  let [status] = useState("Everything you can image is real!");
  let [toggle, setToggle] = useState(false);

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
            <img className="profile__logo" src={profileAvatar} alt="logo" />
            <div className="profile__wrap_name">
              <div className="profile__wrapper_name">
                <p className="profile__name_title">Rodion Strelkov</p>
                <img
                  className="profile__name_logo"
                  src={edit}
                  alt="edit"
                  onClick={handlePopupClick}
                />
              </div>
              <p className="profile__name_subtitle">@1</p>
            </div>
          </div>
          <div className="profile__buttons_wrap">
            <div className="profile__buttons_wrapper">
              <div className="profile__description_wrapper">
                <div className="profile__image_desc" />
                <p className="profile__description_title">Description:</p>
              </div>
              {toggle ? (
                <input
                  className="profile__description_input"
                  type="text"
                  value={status}
                  onBlur={() => {
                    setToggle(false)
                  }}
                  autoFocus={true}
                  onKeyPress={(event) => {
                    if (event.key === "Enter") {
                      setToggle(false);
                    }
                  }}
                />
              ) : (
                <p
                  className="profile__description"
                  onClick={() => {
                    setToggle(true);
                  }}>{status}</p>
              )}
            </div>
            <div className="profile__buttons_wrapper">
              <div className="profile__description_wrapper">
                <div className="profile__image_job" />
                <p className="profile__description_title">Job search:</p>
              </div>
              <p className="profile__description">Yes, actively looking!</p>
            </div>
          </div>
        </div>
        <div className="profile__button_wrapper">
          <button
            className={post === "ProfilePosts" ? inactiveColorPost : activeColorPost}
            onClick={handleProfilePostsClick}
          >Page posts</button>
          <button
            className={post === "SocialMedia" ? inactiveColorPost : activeColorPost}
            onClick={handleProfileMediaClick}
          >Social Media</button>
        </div>
        {post === "ProfilePosts" && <ProfilePosts />}
        {post === "SocialMedia" && <MyMedia />}
        {isPopup === "popupEdit" && <Popup close={setIsPopup} />}
      </div>
      <Hashtags />
    </div>
  );
}

export default Profile;
