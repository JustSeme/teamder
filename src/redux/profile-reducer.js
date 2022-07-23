import profile from "../images/profile_logo2.svg";
import logo1 from "../images/profile_logo1.svg";
import logo3 from "../images/profile_logo3.svg";

let initialState = {
    profilePosts: [
      {
        avatar: logo1,
        name: "Dakota Sience",
        login: "@sience",
        message: "I need the same developer!",
      },
      {
        avatar: logo3,
        name: "Jame Slime",
        login: "@slime",
        message: "Where slimes?!",
      },
    ],
    newPostText: "",
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-POST":
      let newPost = {
        avatar: profile,
        name: "Rodion Strelkov",
        login: "@oldmilky",
        message: state.newPostText,
      };
      state.profilePosts.unshift(newPost);
      state.newPostText = "";
      return state;
    case "UPDATE-NEW-POST-TEXT":
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({type: 'ADD-POST'})
export const updateNewPostTextActionCreator = (payload) => {
  return {
    type: 'UPDATE-NEW-POST-TEXT', newText: payload
  }
}

export default profileReducer;
