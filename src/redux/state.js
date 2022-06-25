import logo from "../images/profile_logo.svg";
import logo1 from "../images/profile_logo1.svg";
import logo3 from "../images/profile_logo3.svg";
import logo4 from "../images/profile_logo4.svg";
import profile from "../images/profile_logo2.svg";

let state = {
  profilePage: {
    profilePosts: [
      {
        avatar: logo4,
        name: "White ONI",
        login: "@whiteoni",
        message: "I want to see more in your application ONI",
      },
      {
        avatar: logo,
        name: "Tomasz Gajda",
        login: "@nerooc",
        message: "I like the idea",
      },
      {
        avatar: logo1,
        name: "Dakota Sience",
        login: "@sience",
        message: "I need the same developer!",
      },
      {
        avatar: logo3,
        name: "Jame Slime",
        login: "@slime",
        message: "Where slimes?!",
      },
    ],
    myPosts: [
      {
        avatar: profile,
        name: "Rodion Strelkov",
        login: "@oldmilky",
        message: "I have to write a big app in react",
      },
      {
        avatar: profile,
        name: "Rodion Strelkov",
        login: "@oldmilky",
        message: "I already have a plan",
      },
      {
        avatar: profile,
        name: "Rodion Strelkov",
        login: "@oldmilky",
        message: "I will write a cool social network!",
      },
    ],
  },
};

export default state;
