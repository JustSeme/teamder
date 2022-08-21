import { getUsers, getPageChanged, getFollow, getUnfollow } from "../api/api";

let initialState = {
  teams: [],
  pagesSize: 5,
  totalTeamsCount: 20,
  currentPage: 1,
  isFetching: false,
  followLoading: false,
};

const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FOLLOW":
      return {
        ...state,
        teams: state.teams.map((t) => {
          if (t.id === action.teamID) {
            return { ...t, followed: true };
          }
          return t;
        }),
      };
    case "UNFOLLOW":
      return {
        ...state,
        teams: state.teams.map((t) => {
          if (t.id === action.teamID) {
            return { ...t, followed: false };
          }
          return t;
        }),
      };
    case "SET-TEAMS":
      return {
        ...state,
        teams: action.teams,
      };
    case "SET-CURRENT-PAGE":
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case "TOGGLE-IS-FETCHING":
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case "TOGGLE-FOLLOW-LOADING":
      return {
        ...state,
        followLoading: action.isFetching,
      };
    default:
      return state;
  }
};

export const followActionCreator = (teamID) => ({ type: "FOLLOW", teamID });
export const unfollowActionCreator = (teamID) => ({ type: "UNFOLLOW", teamID });
export const setTeamsActionCreator = (teams) => ({ type: "SET-TEAMS", teams });
export const setCurrentPageActionCreator = (page) => ({type: "SET-CURRENT-PAGE", page});
export const toggleIsFetchingActionCreator = (isFetching) => ({type: "TOGGLE-IS-FETCHING", isFetching});
export const toggleFollowLoadingActionCreator = (isFetching) => ({type: "TOGGLE-FOLLOW-LOADING", isFetching});

export const getTeamsThunkCreator = (currentPage, pagesSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetchingActionCreator(true));

    getUsers(currentPage, pagesSize)
      .then((data) => {
        // dispatch(toggleIsFetchingActionCreator(false));
        dispatch(setTeamsActionCreator(data.items));
      })
      .finally(dispatch(toggleIsFetchingActionCreator(false)));
  };
};

export const pageChangedThunkCreator = (pageNumber, pagesSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetchingActionCreator(true));
    dispatch(setCurrentPageActionCreator(pageNumber));
    getPageChanged(pageNumber, pagesSize).then((data) => {
      dispatch(toggleIsFetchingActionCreator(false));
      dispatch(setTeamsActionCreator(data.items));
    });
  }
}

export const getFollowThunkCreator = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowLoadingActionCreator(true));
    getFollow(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(followActionCreator(userId));
      }
      dispatch(toggleFollowLoadingActionCreator(false));
    });
  };
};

export const getUnfollowThunkCreator = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowLoadingActionCreator(true));
    getUnfollow(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(unfollowActionCreator(userId));
      }
      dispatch(toggleFollowLoadingActionCreator(false));
    });
  };
};

export default teamReducer;
