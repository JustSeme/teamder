import { React, useState } from "react";
import "./Posts.css";
import repost from "../../../images/repost.svg";

function Posts(props) {
  const [like, setLike] = useState(false);
  const onLikeButtonClick = () => {
    setLike(!like);
  };

  const inactiveLike = "post__unliked";
  const activeLike = "post__liked";

  return (
    <div>
      <div className="post__container">
        <div className="post__wrap">
          <img className="post__avatar" src={props.avatar} alt="avatar" />
          <div className="post__wrapper">
            <div className="post__wrapper_name">
              <div className="post__wrapper_name-box">
                <h1 className="post__name">{props.name}</h1>
                <h2 className="post__login">{props.login}</h2>
              </div>
              <div className="post__wrapper_like">
                <svg
                  className="post__like"
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={onLikeButtonClick}
                >
                  <path
                    className={like ? activeLike : inactiveLike}
                    d="M0 5.81046V5.58389C0 2.85342 1.97344 0.524518 4.66406 0.0760809C6.41016 -0.220403 8.25781 0.360065 9.53125 1.63546L10 2.10342L10.4336 1.63546C11.7422 0.360065 13.5547 -0.220403 15.3359 0.0760809C18.0273 0.524518 20 2.85342 20 5.58389V5.81046C20 7.43155 19.3281 8.98233 18.1406 10.0878L11.082 16.6776C10.7891 16.9511 10.4023 17.1034 10 17.1034C9.59766 17.1034 9.21094 16.9511 8.91797 16.6776L1.85898 10.0878C0.673047 8.98233 1.17188e-05 7.43155 1.17188e-05 5.81046H0Z"
                    fill="#3A444C"
                  />
                </svg>
                <img className="post__repost" src={repost} alt="repost" />
              </div>
            </div>
            <p className="post__message">{props.message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
