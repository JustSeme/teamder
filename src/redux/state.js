import logo from "../images/profile_logo.svg";
import logo1 from "../images/profile_logo1.svg";
import logo3 from "../images/profile_logo3.svg";
import logo4 from "../images/profile_logo4.svg";
import profile from "../images/profile_logo2.svg";

let store = {
  _state: {
    profilePage: {
      profilePosts: [
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
      newPostText: "",
    },
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
    messagePage: {
      messagePost: [
        {
          avatar: logo4,
          name: "White ONI",
          message: "We wrote as you requested",
          time: "30m"
        },
        {
          avatar: logo,
          name: "Tomasz Gajda",
          message: "I don't know what to write here(",
          time: "13:23"
        },
        {
          avatar: logo1,
          name: "Dakota Sience",
          message: "Cool, you can send messages",
          time: "15.07.22"
        },
        {
          avatar: logo3,
          name: "Jame Slime",
          message: "Okay, I'll text you, but you're slime",
          time: "12.07.22"
        },
      ],
      newMessageBody: "",
    }
  },
  _callSubscriber() {
    console.log("state changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        avatar: profile,
        name: "Rodion Strelkov",
        login: "@oldmilky",
        message: this._state.profilePage.newPostText,
      };
      this._state.profilePage.profilePosts.unshift(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    }
    else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
    else if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
      this._state.messagePage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    }
    else if (action.type === 'SEND-MESSAGE') {
      let body = {
        avatar: profile,
        name: "Rodion Strelkov",
        message: this._state.messagePage.newMessageBody,
        time: "now"
      };
      this._state.messagePage.newMessageBody = '';
      this._state.messagePage.messagePost.unshift(body);
      this._callSubscriber(this._state);
    }
  }
};

export const addPostActionCreator = () => ({type: 'ADD-POST'})
export const updateNewPostTextActionCreator = (text) => {
  return {
    type: 'UPDATE-NEW-POST-TEXT', newText: text
  }
}

export const sendMessageCreator = () => ({type: 'SEND-MESSAGE'})
export const updateNewMessageBodyCreator = (body) => {
  return {
    type: 'UPDATE-NEW-MESSAGE-BODY', body: body
  }
}


window.store = store;

export default store;
