import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import Teams from "./components/Teams/Teams";
import MyProfile from "./components/Profile/MyProfile";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="page">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/myteams" element={<Teams />} exact />
          <Route path="/messages" element={<Messages />} exact />
          <Route path="/profile/" element={<MyProfile />} exact />
          <Route path="/profile/:userId" element={<Profile />} exact />
          <Route path="/login" element={<Login />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
