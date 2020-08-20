import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root'

//TESTING IMPORTS
import * as actions from './actions/session_actions'
import { allFriends, addFriend, deleteFriend } from './actions/friend_actions'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  //TESTING AREA
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.allFriends = allFriends;
  window.addFriend = addFriend;
  window.deleteFriend = deleteFriend;
  //TESTING AREA
  
  ReactDOM.render(<Root store={store} />, root)
})