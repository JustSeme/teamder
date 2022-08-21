import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import eventReducer from "./event-reducer";
import teamReducer from "./team-reducer";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk";

let store = configureStore({
  reducer: {
    eventPage: eventReducer,
    profilePage: profileReducer,
    messagePage: messageReducer,
    teamPage: teamReducer,
    auth: authReducer,
  },
}, applyMiddleware(thunk));

export default store;
