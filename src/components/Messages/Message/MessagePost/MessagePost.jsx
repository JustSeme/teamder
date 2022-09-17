import { React } from "react";
import "../../Messages.css";
import Message from "../Message";
import { useDispatch, useSelector } from "react-redux";
import {sendMessageActionCreator} from "../../../../redux/message-reducer";
import { Form, Field } from "react-final-form";
import { required, maxLengthCreator } from "../../../../utils/validators";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";

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
                        className="messages__input"
                        {...input}
                      />
                    </Box>
                    {meta.error && meta.touched && (
                      <span className="error__span">{meta.error}</span>
                    )}
                  </>
                )}
              </Field>
            </div>
            <Button
              className="messages__button"
              type="submit"
              variant="outlined"
              color="primary"
              size="medium"
              sx={{
                margin: "0 0 0 10px"
              }}
            >Reply</Button>
          </form>
        )}
      />
      <div>{messageElement}</div>
    </div>
  );
}

export default MessagePost;
