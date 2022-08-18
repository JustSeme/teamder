import React from "react";
import "../Event.css";
import Event from "../Event";
import logo from "../../../images/profile_logo2.svg";
import {useSelector} from "react-redux";

function CurrentEvent(props) {
  const events = useSelector(state => [...state.eventPage.currentEvent])
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

  return <div>{eventElement}</div>;
}

export default CurrentEvent;
