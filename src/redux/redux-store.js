// import { combineReducers, createStore as createStore } from "redux";
import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
// import eventReducer from "./event-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    // eventPage: eventReducer
})

let store = createStore(reducers);

export default store