import { React } from "react";
import "../../Messages.css";
import Message from "../Message";
import { useDispatch, useSelector } from "react-redux";
import {sendMessageActionCreator} from "../../../../redux/message-reducer";
import { Form, Field } from "react-final-form";
import { required, maxLengthCreator } from "../../../../utils/validators";

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
    onSendMessageClick(values.messageForm)
  }

  const maxLength = maxLengthCreator(200);

  const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined)

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form className="messages__wrap" onSubmit={handleSubmit}>
            <div className="messages__form">
              <Field
                name="messageForm"
                validate={composeValidators(required, maxLength)}
              >
                {({ input, meta }) => (
                  <>
                    <input {...input} className="messages__input" placeholder="Start a new message" type="text" />
                    {meta.error && meta.touched && <span className="error__span">{meta.error}</span>}
                  </>
                )}
              </Field>
            </div>
            <button className="messages__button" type="submit">
              Reply
            </button>
          </form>
        )}
      />
      <div>{messageElement}</div>
    </div>
  );
}

export default MessagePost;
