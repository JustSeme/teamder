import logo from "../images/profile_logo.svg";
import logo1 from "../images/profile_logo1.svg";
import logo3 from "../images/profile_logo3.svg";
import logo4 from "../images/profile_logo4.svg";
import profile from "../images/profile_logo2.svg";

let initialState = {
  eventPage: {
    currentEvent: [
      {
        logo: profile,
        name: "Rodion Strelkov",
        title: "Hackathon - Webdev and mobile applications!",
        date: "24.06",
        geo: "Astana",
        people: "28/30",
        interest: "Programming, technologies",
      },
      {
        logo: profile,
        name: "Rodion Strelkov",
        title: "Preparing for the Hackathon",
        date: "18.06",
        geo: "Astana",
        people: "13/30",
        interest: "Programming, technologies",
      },
      {
        logo: profile,
        name: "Rodion Strelkov",
        title: 'Development - social network "Teamder"!',
        date: "20.05",
        geo: "Karaganda",
        people: "1/2",
        interest: "Programming, Frontend, Frontend",
      },
      {
        logo: profile,
        name: "Rodion Strelkov",
        title: "Learn the missing knowledge of React",
        date: "15.04",
        geo: "Karaganda",
        people: "4/10",
        interest: "Programming, Development, React JSX",
      },
      {
        logo: profile,
        name: "Rodion Strelkov",
        title: "Assemble a team of friends to play CS:GO",
        date: "02.04",
        geo: "Almaty",
        people: "5/5",
        interest: "Games, counter-strike",
      },
    ],
    completedEvent: [
      {
        logo: profile,
        name: "Rodion Strelkov",
        title: "Learn the missing knowledge of React",
        date: "15.04",
        geo: "Karaganda",
        people: "4/10",
        interest: "Programming, Development, React JSX",
      },
      {
        logo: profile,
        name: "Rodion Strelkov",
        title: "Assemble a team of friends to play CS:GO",
        date: "02.04",
        geo: "Almaty",
        people: "5/5",
        interest: "Games, counter-strike",
      },
    ],
  },
};

const eventReducer = (state = initialState, action) => {



    return state;
    
}

export default eventReducer;