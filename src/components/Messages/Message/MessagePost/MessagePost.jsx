import { React, useState } from "react";
import "../../Messages.css";
import Message from "../Message";

function MessagePost(props) {
  let messageElement = props.messagePost.map((p) => <Message avatar={p.avatar} name={p.name} message={p.message} time={p.time} />);
  return (
    <div>
      <div>{messageElement}</div>
    </div>
  );
}

export default MessagePost;
