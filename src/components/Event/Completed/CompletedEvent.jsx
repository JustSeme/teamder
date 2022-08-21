import React from "react";
import "../Event.css";
import Event from "../Event";
import {useSelector} from "react-redux";

function CompletedEvent(props) {
  const events = useSelector(state => [...state.eventPage.completedEvent])
  let eventElement = events.map((p, e) => (
    <Event
      key={e.key}
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
