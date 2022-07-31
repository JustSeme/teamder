import { configureStore } from '@reduxjs/toolkit'
import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import eventReducer from "./event-reducer";
import teamReducer from './team-reducer';

let store = configureStore({
    reducer: {
        eventPage: eventReducer,
        profilePage: profileReducer,
        messagePage: messageReducer,
        teamPage: teamReducer
    }
});
export default store;