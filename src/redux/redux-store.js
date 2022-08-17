import { configureStore } from '@reduxjs/toolkit'
import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import eventReducer from "./event-reducer";
import teamReducer from './team-reducer';
import authReducer from './auth-reducer';

let store = configureStore({
    reducer: {
        eventPage: eventReducer,
        profilePage: profileReducer,
        messagePage: messageReducer,
        teamPage: teamReducer,
        auth: authReducer
    }
});

window.store = store;

export default store;