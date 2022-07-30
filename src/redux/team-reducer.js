import profile from "../images/profile_logo2.svg";
import logo from "../images/profile_logo.svg";
import logo1 from "../images/profile_logo1.svg";
import logo3 from "../images/profile_logo3.svg";
import logo4 from "../images/profile_logo4.svg";

let initialState = {
  teams: [
    {
      avatar: logo4,
      name: "White ONI",
      desc: "I need my brothers ONI!",
      location: {city: "Tokyo", country: "Japan"},
      id: 1
    },
    {
      avatar: logo,
      name: "Tomasz Gajda",
      desc: "Lala",
      location: {city: "Tokyo", country: "Japan"},
      id: 2
    },
    {
      avatar: logo1,
      name: "Dakota Sience",
      desc: "Yoyo",
      location: {city: "Tokyo", country: "Japan"},
      id: 3
    },
    {
      avatar: logo3,
      name: "Jame Slime",
      desc: "Yaya",
      location: {city: "Tokyo", country: "Japan"},
      id: 4
    },
  ],
};

const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-POST":
      let newPost = {
        avatar: profile,
        name: "Rodion Strelkov",
        login: "@oldmilky",
        message: state.newPostText,
      };
      return {
        ...state,
        profilePosts: [newPost, ...state.profilePosts],
        newPostText: "",
      };
    case "UPDATE-NEW-POST-TEXT":
      // state.newPostText = action.newText;
      // return state;
      return {
        ...state,
        newPostText: action.newText,
      };
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: "ADD-POST" });
export const updateNewPostTextActionCreator = (payload) => {
  return {
    type: "UPDATE-NEW-POST-TEXT",
    newText: payload,
  };
};

export default teamReducer;
