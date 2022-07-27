import { React, useState } from "react";
import "../../Messages.css";
import Message from "../Message";
import { useDispatch, useSelector } from "react-redux";
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../../../redux/message-reducer';

function MessagePost(props) {

  const dispatch = useDispatch();

  const messages = useSelector(state => state.messagePage.messagePost)
  let messageElement = messages.map((p) => <Message avatar={p.avatar} name={p.name} message={p.message} time={p.time} />);
  let newMessageBody = props.newMessageBody;

  let onSendMessageClick = () => {
    dispatch(sendMessageCreator());
  }

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    dispatch(updateNewMessageBodyCreator(body));
    console.log(body)
  }

  return (
    <div>
      <div className="messages__wrapper">
        <input
          className="messages__input"
          minLength={2}
          maxLength={400}
          placeholder="Start a new message"
          value={newMessageBody}
          onChange={onNewMessageChange}
        />
        <button className="messages__button"
         onClick={onSendMessageClick}>Reply</button>
      </div>
      <div>{messageElement}</div>
    </div>
  );
}

export default MessagePost;
