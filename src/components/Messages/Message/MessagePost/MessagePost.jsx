import { React } from "react";
import "../../Messages.css";
import Message from "../Message";
import { useDispatch, useSelector } from "react-redux";
import {sendMessageActionCreator} from "../../../../redux/message-reducer";
import { Form, Field } from "react-final-form";

function MessagePost() {
  const dispatch = useDispatch();

  const messages = useSelector((state) => state.messagePage.messagePost);
  let messageElement = messages.map((p, message) => (
    <Message
      key={message}
      avatar={p.avatar}
      name={p.name}
      message={p.message}
      time={p.time}
      status={p.status}
    />
  ));

  let onSendMessageClick = (payload) => {
    dispatch(sendMessageActionCreator(payload));
  };

  const onSubmit = (values) => {
    onSendMessageClick(values.sendMessage)
    console.log(values)
  }
  const validate = (e) => {}

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <form className="messages__wrapper" onSubmit={handleSubmit}>
            <Field
              className="messages__input"
              component="input"
              name="sendMessage"
              placeholder="Start a new message"
            />
            <button className="messages__button" type="submit">Reply</button>
          </form>
        )}
      />
      <div>{messageElement}</div>
    </div>
  );
}

export default MessagePost;
