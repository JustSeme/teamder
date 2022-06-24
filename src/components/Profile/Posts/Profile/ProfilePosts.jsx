import React from "react";
import "../Posts.css";
import Post from "../Post";

function ProfilePosts(props) {
  
  let postElement = props.profilePosts.map( p => <Post avatar={p.avatar} name={p.name} login={p.login} message={p.message} />);

  return (
    <div className="posts">
      <div className="posts__container">
        {postElement}
      </div>
    </div>
  );
}

export default ProfilePosts;
