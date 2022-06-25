import React from "react";
import "../Event.css";
import Event from "../Event";
import logo from "../../../images/profile_logo2.svg";

function CompletedEvent(props) {
  let eventElement = props.completedEvent.map((p) => (
    <Event
      logo={p.logo}
      name={p.name}
      title={p.title}
      date={p.date}
      geo={p.geo}
      people={p.people}
      interest={p.interest}
    />
  ));
  return (
    <div>
      {eventElement}
    </div>
  );
}

export default CompletedEvent;
