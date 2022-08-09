let initialState = {
  teams: [],
  pagesSize: 5,
  totalTeamsCount: 20,
  currentPage: 1
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
        currentPage: action.currentPage
      };
    default:
      return state;
  }
};

export const followActionCreator = (teamID) => ({ type: "FOLLOW", teamID });
export const unfollowActionCreator = (teamID) => ({ type: "UNFOLLOW", teamID });
export const setTeamsActionCreator = (teams) => ({type: "SET-TEAMS", teams});
export const setCurrentPageActionCreator = (page) => ({type: "SET-CURRENT-PAGE", page})

export default teamReducer;
