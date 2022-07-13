import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import state, { addPost, subscribe, updateNewPostText } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerender = (state) => {
    root.render(
        <React.StrictMode>
          <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
        </React.StrictMode> 
      );  
}

rerender(state)

subscribe(rerender);
