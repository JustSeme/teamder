import { React, useState } from "react";
import "./Home.css";
import Navigation from "../Navigation/Navigation";
import Hashtags from "../Hashtags/Hashtags";
import CurrentEvent from "../Event/Current/CurrentEvent"
import CompletedEvent from "../Event/Completed/CompletedEvent";
import logo from "../../images/profile_logo2.svg";

function Home() {

  const [event, setEvent] = useState("CurrentEvent");

  const handleCurrentEventClick = () => {
    setEvent("CurrentEvent");
  };

  const handleCompletedEventClick = () => {
    setEvent("CompletedEvent");
  };

  const activeColorEvent = "home__button_active";

  const inactiveColorEvent = "home__button";

  return (
    <div className="home">
      <Navigation
        classHome={`${"navigation__button_active"}`}
        classTeams={`${"navigation__button"}`}
        classMessages={`${"navigation__button"}`}
        classProfile={`${"navigation__button"}`}

        classHomePath={`${"navigation__active"}`}
        classTeamsPath={`${"navigation__inactive"}`}
        classMessagesPath={`${"navigation__inactive"}`}
        classProfilePath={`${"navigation__inactive"}`}
      />
      <div className="home__container">
        <div className="home__wrapper">
          <div className="home__wrapper_name">
            <p className="home__title">Welcome, Rodion!</p>
            <p className="home__subtitle">Events</p>
          </div>
          <div className="home__wrapper_buttons">
            <button className={event === "CurrentEvent" ? activeColorEvent : inactiveColorEvent} onClick={handleCurrentEventClick}>Current</button>
            <button className={event === "CompletedEvent" ? activeColorEvent : inactiveColorEvent} onClick={handleCompletedEventClick}>Completed</button>
          </div>
        </div>
        {event === "CurrentEvent" && <CurrentEvent />}
        {event === "CompletedEvent" && <CompletedEvent />}
      </div>
      <Hashtags />
    </div>
  );
}

export default Home;
