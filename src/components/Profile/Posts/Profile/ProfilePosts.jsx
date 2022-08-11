import React from "react";
import "../Posts.css";
import Post from "../Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profile-reducer";
import { useSelector, useDispatch } from "react-redux";

function ProfilePosts() {
  const posts = useSelector((state) => [...state.profilePage.profilePosts]);
  let postElement = posts.map((p, post) => (
    <Post
      key={post}
      avatar={p.avatar}
      name={p.name}
      login={p.login}
      message={p.message}
    />
  ));

  let newPostElement = useSelector((state) => state.profilePage.newPostText);

  const dispatch = useDispatch();

  let addPost = () => {
    dispatch(addPostActionCreator());
  };

  let onPostChange = (e) => {
    let text = e.target.value;
    dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <div className="posts">
      <div className="profile-create">
          <p className="profile-create__title">Create a post</p>
          <input
            className="profile-create__field"
            minLength={2}
            maxLength={400}
            placeholder="Post content..."
            value={newPostElement}
            onChange={onPostChange}
          />
          <button className="profile-create__button" onClick={addPost}>
            Create
          </button>
        </div>
      <div className="posts__container">{postElement}</div>
    </div>
  );
}

export default ProfilePosts;
