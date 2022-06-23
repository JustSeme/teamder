import React from "react";
import "../Posts.css";
import Post from "../Post";
import profile from "../../../../images/profile_logo2.svg";

function MyPosts() {
  let postsData = [
    {avatar:profile, name:"Rodion Strelkov", login:"@oldmilky", message:"I have to write a big app in react"},
    {avatar:profile, name:"Rodion Strelkov", login:"@oldmilky", message:"I already have a plan"},
    {avatar:profile, name:"Rodion Strelkov", login:"@oldmilky", message:"I will write a cool social network!"},
  ]

  let postElement = postsData.map( p => <Post avatar={p.avatar} name={p.name} login={p.login} message={p.message} />);
  return (
    <div className="posts">
      <div className="posts__container">
        { postElement }
      </div>
    </div>
  );
}

export default MyPosts;
