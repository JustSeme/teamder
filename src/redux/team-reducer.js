let initialState = {
  teams: [],
  pagesSize: 5,
  totalTeamsCount: 20,
  currentPage: 1,
  isFetching: false,
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
        isFetching: action.isFetching
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

export default teamReducer;
