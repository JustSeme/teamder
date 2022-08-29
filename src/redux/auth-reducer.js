import { getAuthMe } from "../api/api";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET-AUTH-USER":
      return {
        ...state,
        ...action.data,
        isAuth: true,
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

export const setAuthUserActionCreator = (userId, email, login) => ({type: "SET-AUTH-USER", data: { userId, email, login }});
export const toggleIsFetchingActionCreator = (isFetching) => ({type: "TOGGLE-IS-FETCHING", isFetching});

export const getAuthMeThunkCreator = () => {
  return (dispatch) => {
    getAuthMe().then((data) => {
      if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        dispatch(setAuthUserActionCreator(id, email, login));
      }
    })
  };
};

export default authReducer;
