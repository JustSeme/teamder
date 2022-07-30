import profile from "../images/profile_logo2.svg";
import logo from "../images/profile_logo.svg";
import logo1 from "../images/profile_logo1.svg";
import logo3 from "../images/profile_logo3.svg";
import logo4 from "../images/profile_logo4.svg";

let initialState = {
  messagePost: [
    {
      avatar: logo4,
      name: "White ONI",
      message: "We wrote as you requested",
      time: "30m"
    },
    {
      avatar: logo,
      name: "Tomasz Gajda",
      message: "I don't know what to write here(",
      time: "13:23"
    },
    {
      avatar: logo1,
      name: "Dakota Sience",
      message: "Cool, you can send messages",
      time: "15.07.22"
    },
    {
      avatar: logo3,
      name: "Jame Slime",
      message: "Okay, I'll text you, but you're slime",
      time: "12.07.22"
    },
  ],
  newMessageBody: "",
}

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE-NEW-MESSAGE-BODY":
      // state.newMessageBody = action.body;
      // return state;
      return {
        ...state,
        newMessageBody: action.body
      }
    case "SEND-MESSAGE":
      let body = {
        avatar: profile,
        name: "Rodion Strelkov",
        message: state.newMessageBody,
        time: "now",
      };
      
      // state.newMessageBody = "";
      // state.messagePost.unshift(body);
      // return state;
      return {
        ...state, 
        newMessageBody: "",
        messagePost: [body, ...state.messagePost]
      }
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
