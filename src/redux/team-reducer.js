import profile from "../images/profile_logo2.svg";
import logo from "../images/profile_logo.svg";
import logo1 from "../images/profile_logo1.svg";
import logo3 from "../images/profile_logo3.svg";
import logo4 from "../images/profile_logo4.svg";

let initialState = {
  teams: [
    // {
    //   avatar: logo4,
    //   name: "White ONI",
    //   login: "@whiteoni",
    //   desc: "I need brothers ONI!",
    //   id: 1,
    //   followed: true,
    // },
    // {
    //   avatar: logo,
    //   name: "Tomasz Gajda",
    //   login: "@nerooc",
    //   desc: "Hello, I'm from Poland",
    //   id: 2,
    //   followed: false,
    // },
    // {
    //   avatar: logo1,
    //   name: "Dakota Sience",
    //   login: "@sience",
    //   desc: "Looking for a developer!",
    //   id: 3,
    //   followed: false,
    // },
    // {
    //   avatar: logo3,
    //   name: "Jame Slime",
    //   login: "@slimeee",
    //   desc: "I need more slimes",
    //   id: 4,
    //   followed: true,
    // },
  ],
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
