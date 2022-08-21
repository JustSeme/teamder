import { getAuthMe } from "../api/api";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET-AUTH-USER":
      return {
        ...state,
        ...action.data,
        isAuth: true
      };

    default:
      return state;
  }
};

export const setAuthUserActionCreator = (userId, email, login) => ({type: "SET-AUTH-USER", data: {userId, email, login}})

export const getAuthMeThunkCreator = () => {
  return (dispatch) => {
    getAuthMe().then((data) => {
      if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        dispatch(setAuthUserActionCreator(id, email, login));
      }
    });
  };
};
 
export default authReducer;
