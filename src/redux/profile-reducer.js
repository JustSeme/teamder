import profile from "../images/profile_logo2.svg";
import { getProfileUser } from "../api/api";

let initialState = {
  profilePosts: [],
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
        message: action.payload,
      };
      return {
        ...state,
        profilePosts: [newPost, ...state.profilePosts],
        newPostText: "",
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

export const addPostActionCreator = (payload) => ({ type: "ADD-POST", payload });
export const setUserProfileActionCreator = (profile) => ({type: "SET-USER-PROFILE", profile});
export const toggleIsFetchingActionCreator = (isFetching) => ({type: "TOGGLE-IS-FETCHING", isFetching});

export const getProfileUserThunkCreator = (userId) => {
  return (dispatch) => {
    dispatch(toggleIsFetchingActionCreator(true));
    getProfileUser(userId).then((data) => {
      dispatch(setUserProfileActionCreator(data));
    })
    .finally(dispatch(toggleIsFetchingActionCreator(false)));
  };
};

export default profileReducer;
