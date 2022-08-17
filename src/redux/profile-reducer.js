import profile from "../images/profile_logo2.svg";

let initialState = {
  profilePosts: [],
  newPostText: "",
  profile: [],
  isFetching: false,
};

const profileReducer = (state = initialState, action) => {
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
    case "ADD-POST-USER":
      let newPostUser = {
        avatar: profile,
        name: "Rodion Strelkov",
        login: "@oldmilky",
        message: state.newPostText,
      };
      return {
        ...state,
        profilePosts: [newPostUser, ...state.profilePostsUser],
        newPostText: "",
      };
    case "UPDATE-NEW-POST-TEXT":
      return {
        ...state,
        newPostText: action.newText,
      };
    case "SET-USER-PROFILE":
      return {
        ...state,
        profile: action.profile,
      };
    case "TOGGLE-IS-FETCHING":
      return {
        ...state,
        isFetching: action.isFetching,
      };
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: "ADD-POST" });
export const addPostUserActionCreator = () => ({ type: "ADD-POST-USER" });
export const updateNewPostTextActionCreator = (payload) => ({
  type: "UPDATE-NEW-POST-TEXT",
  newText: payload,
});
export const setUserProfileActionCreator = (profile) => ({
  type: "SET-USER-PROFILE",
  profile,
});
export const toggleIsFetchingActionCreator = (isFetching) => ({
  type: "TOGGLE-IS-FETCHING",
  isFetching,
});

export default profileReducer;
