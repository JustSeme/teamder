import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerender = (state) => {
    root.render(
        <React.StrictMode>
          <App state={state} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)} />
        </React.StrictMode> 
      );  
}

rerender(store.getState())

store.subscribe(rerender);
