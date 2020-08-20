import * as friendApiUtil from '../util/friend_api_util';

export const RECEIVE_FRIENDS = 'RECEIVE_FRIENDS';
export const RECEIVE_FRIEND = 'RECEIVE_FRIEND';
export const REMOVE_FRIEND = 'REMOVE_FRIEND';

const receiveFriends = friends => {
  return ({
    type: RECEIVE_FRIENDS,
    friends
  })
}

const receiveFriend = friend => ({
  type: RECEIVE_FRIEND,
  friend
})

const removeFriend = friendId => ({
  type: REMOVE_FRIEND,
  friendId
})

export const addFriend = friendInfo => dispatch => (
  friendApiUtil.friendRequest(friendInfo)
    .then(friend => dispatch(receiveFriend(friend)))
)

export const deleteFriend = friendId => dispatch => (
  friendApiUtil.deleteFriend(friendId)
    .then(() => dispatch(removeFriend()))
)

export const allFriends = (userId) => dispatch => {
  return (friendApiUtil.allFriends(userId)
  .then(friends => dispatch(receiveFriends(friends))))
}