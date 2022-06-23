import React from "react";
import "../Event.css";
import Event from "../Event";
import logo from "../../../images/profile_logo2.svg";

function CompletedEvent(props) {
  return (
    <div>
      <Event
        logo={logo}
        name="Rodion Strelkov"
        title="Learn the missing knowledge of React"
        date="15.04"
        geo="Karaganda"
        people="4/10"
        interest="Programming, Development, React JSX"
      />
      <Event
        logo={logo}
        name="Rodion Strelkov"
        title="Assemble a team of friends to play CS:GO"
        date="02.04"
        geo="Almaty"
        people="5/5"
        interest="Games, counter-strike"
      />
    </div>
  );
}

export default CompletedEvent;
