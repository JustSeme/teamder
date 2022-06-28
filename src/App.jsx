import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import Popup from "./components/Popup/Popup";
import Messages from "./components/Messages/Messages";

function App(props) {
  return (
    <div className="page">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home 
                currentEvent={props.state.eventPage.currentEvent}
                completedEvent={props.state.eventPage.completedEvent}
              />
            }
            exact
          />
          <Route path="/messages" element={<Messages />} exact />
          <Route
            path="/profile"
            element={
              <Profile
                profilePosts={props.state.profilePage.profilePosts}
                myPosts={props.state.profilePage.myPosts}
                addPost={props.addPost}
              />
            }
            exact
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
