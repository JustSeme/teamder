import React from "react";
import "../Posts.css";
import Post from "../Post";
import logo from "../../../../images/profile_logo.svg";
import logo1 from "../../../../images/profile_logo1.svg";
import logo3 from "../../../../images/profile_logo3.svg";
import logo4 from "../../../../images/profile_logo4.svg";

function ProfilePosts() {
  let postsData = [
    {avatar:logo4, name:"White ONI", login:"@whiteoni", message:"I want to see more in your application ONI"},
    {avatar:logo, name:"Tomasz Gajda", login:"@nerooc", message:"I like the idea"},
    {avatar:logo1, name:"Dakota Sience", login:"@sience", message:"I need the same developer!"},
    {avatar:logo3, name:"Jame Slime", login:"@slime", message:"Where slimes?!"},
  ]

  let postElement = postsData.map( p => <Post avatar={p.avatar} name={p.name} login={p.login} message={p.message} />);

  return (
    <div className="posts">
      <div className="posts__container">
        {postElement}
      </div>
    </div>
  );
}

export default ProfilePosts;
