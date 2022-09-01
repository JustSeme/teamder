import React from "react";
import "../Posts.css";
import Post from "../Post";
import {addPostActionCreator} from "../../../../redux/profile-reducer";
import { useSelector, useDispatch } from "react-redux";
import { Form, Field } from "react-final-form";

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

  const dispatch = useDispatch();

  let addPost = (payload) => {
    dispatch(addPostActionCreator(payload));
  };

  const onSubmit = (values) => {
    addPost(values.ProfileForm);
  }
  const validate = () => {}

  return (
    <div className="posts">
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <form className="profile-create" onSubmit={handleSubmit}>
            <p className="profile-create__title">Create a post</p>
            <Field
              className="profile-create__field"
              component="input"
              placeholder="Post content..."
              name="ProfileForm"
            />
            <button className="profile-create__button" type="submit">Create</button>
          </form>
        )}
      />
      <div className="posts__container">{postElement}</div>
    </div>
  );
}

export default ProfilePosts;
