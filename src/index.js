import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/redux-store';
// import oldStore from "./redux/store"

const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerender = (state) => {
    root.render(
        <React.StrictMode>
          <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
        </React.StrictMode> 
      );  
}

rerender(store.getState())

store.subscribe(() => {
  let state = store.getState();
  rerender(state);
});
