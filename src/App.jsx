import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";

function App(props) {
  return (
    <div className="page">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home currentEvent={props.state.eventPage.currentEvent} completedEvent={props.state.eventPage.completedEvent} />} exact /> */}
          <Route path="/messages" element={<Messages messagePost={props.state.messagePage.messagePost} dispatch={props.dispatch} />} exact />
          <Route path="/profile" element={<Profile profilePosts={props.state.profilePage.profilePosts} dispatch={props.dispatch} />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
