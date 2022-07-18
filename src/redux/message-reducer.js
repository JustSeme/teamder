import profile from "../images/profile_logo2.svg";

const messageReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE-NEW-MESSAGE-BODY":
      state.newMessageBody = action.body;
      return state;
    case "SEND-MESSAGE":
      let body = {
        avatar: profile,
        name: "Rodion Strelkov",
        message: state.newMessageBody,
        time: "now",
      };
      state.newMessageBody = "";
      state.messagePost.unshift(body);
      return state;
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({type: 'SEND-MESSAGE'})
export const updateNewMessageBodyCreator = (body) => {
  return {
    type: 'UPDATE-NEW-MESSAGE-BODY', body: body
  }
}

export default messageReducer;
