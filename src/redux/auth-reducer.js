import { authMeAPI, loginAPI, logoutAPI } from "../api/api";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET-AUTH-USER":
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};

export const setAuthUserActionCreator = (userId, email, login, isAuth) => ({type: "SET-AUTH-USER", payload: { userId, email, login, isAuth }});

export const authMeThunkCreator = () => {
  return (dispatch) => {
    authMeAPI().then((data) => {
      if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        dispatch(setAuthUserActionCreator(id, email, login, true));
      }
    })
  };
};

export const loginThunkCreator = (email, password, rememberMe) => {
  return (dispatch) => {
    loginAPI(email, password, rememberMe).then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(authMeThunkCreator());
      }
    })
  };
};

export const logoutThunkCreator = () => {
  return (dispatch) => {
    logoutAPI().then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(authMeThunkCreator(null, null, null, false));
      }
    })
  };
};

export default authReducer;
