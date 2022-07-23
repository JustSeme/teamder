import { configureStore } from '@reduxjs/toolkit'
import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import eventReducer from "./event-reducer";

let store = configureStore({
    reducer: {
        profilePage: profileReducer,
        messagePage: messageReducer,
    }
});
export default store;