import { RECEIVE_FRIENDS, RECEIVE_FRIEND, REMOVE_FRIEND } from '../actions/friend_actions'

const friendsReducer = (state = {}, action) => {
  Object.freeze()
  let newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_FRIENDS:
      const friendsList = Object.values(action.friends);
      friendsList.forEach((friend) => {
        newState[friend.id] = friend
      })
      return newState;
    case RECEIVE_FRIEND:
      newState[action.friend.id] = action.friend;
      return newState;
    case REMOVE_FRIEND:
      delete newState[action.friend.id]
      return newState;
    default:
      return state;
  }
}

export default friendsReducer;