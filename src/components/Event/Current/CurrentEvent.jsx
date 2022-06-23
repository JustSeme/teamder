import React from "react";
import "../Event.css";
import Event from "../Event";
import logo from "../../../images/profile_logo2.svg";

function CurrentEvent(props) {
  return (
    <div>
        <Event
          logo={logo}
          name="Rodion Strelkov"
          title="Hackathon - Webdev and mobile applications!"
          date="24.06"
          geo="Astana"
          people="28/30"
          interest="Programming, technologies"
        />
        <Event
          logo={logo}
          name="Rodion Strelkov"
          title="Preparing for the Hackathon"
          date="18.06"
          geo="Astana"
          people="13/30"
          interest="Programming, technologies"
        />
        <Event
          logo={logo}
          name="Rodion Strelkov"
          title='Development - social network "Teamder"!'
          date="20.05"
          geo="Karaganda"
          people="1/2"
          interest="Programming, Frontend, Frontend"
        />
        <Event
          logo={logo}
          name="Rodion Strelkov"
          title='Learn the missing knowledge of React'
          date="15.04"
          geo="Karaganda"
          people="4/10"
          interest="Programming, Development, React JSX"
        />
        <Event
          logo={logo}
          name="Rodion Strelkov"
          title='Assemble a team of friends to play CS:GO'
          date="02.04"
          geo="Almaty"
          people="5/5"
          interest="Games, counter-strike"
        />
    </div>
  );
}

export default CurrentEvent;