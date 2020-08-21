import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_FRIEND_USERS, RECEIVE_FRIEND_USER, REMOVE_FRIEND } from '../actions/friend_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {[action.currentUser.id]: action.currentUser})
    case RECEIVE_FRIEND_USERS:
      return Object.assign({}, state, action.friends);
    case RECEIVE_FRIEND_USER:
      return Object.assign({}, state, {[action.friend.id]: action.friend} )
    case REMOVE_FRIEND:
      const newState = Object.assign({}, state)
      delete newState[action.friend.friend_id]
      return newState;
    default:
      return state;
  }
}

export default usersReducer;