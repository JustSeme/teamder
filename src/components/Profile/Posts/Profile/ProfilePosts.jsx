import React from "react";
import "../Posts.css";
import Post from "../Post";
import {addPostActionCreator} from "../../../../redux/profile-reducer";
import { useSelector, useDispatch } from "react-redux";
import { Form, Field } from "react-final-form";
import { maxLengthCreator, required, minLengthCreator } from "../../../../utils/validators";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";

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

  const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined)

  const maxLength100 = maxLengthCreator(100);

  const minLength3 = minLengthCreator(3);

  return (
    <div className="posts">
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form className="profile-create" onSubmit={handleSubmit}>
            <p className="profile-create__title">Create a post</p>
            <Field
              name="ProfileForm"
              validate={composeValidators(required, maxLength100, minLength3)}
            >
              {({ input, meta }) => (
                <>
                  <Box
                      component="form"
                      sx={{
                        "& > :not(style)": { m: 1, width: "30ch" },
                      }}
                      autoComplete="off"
                    >
                      <TextField
                        id="standard-basic"
                        label="Start a new message"
                        variant="standard"
                        color="primary"
                        // sx={{ input: { color: '#3A444C' } }}
                        sx={{
                          "& .MuiFormLabel-root": {
                            color: "secondary.main",
                          },
                          input: { color: "#3A444C" },
                        }}
                        {...input}
                      />
                    </Box>
                  { meta.error && meta.touched && <span className="error__span">{meta.error}</span> }
                </>
              )}
            </Field>
            <Button
              className="messages__button"
              type="submit"
              variant="outlined"
              color="primary"
              size="large"
              sx={{
                margin: "10px 0 0 8px",
                width: "100px",
                height: "40px"
              }}
            >Create</Button>
          </form>
        )}
      />
      <div className="posts__container">{postElement}</div>
    </div>
  );
}

export default ProfilePosts;
