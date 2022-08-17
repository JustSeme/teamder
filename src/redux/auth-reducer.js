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

export default authReducer;
