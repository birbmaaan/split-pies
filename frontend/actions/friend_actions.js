import * as friendApiUtil from '../util/friend_api_util';

export const RECEIVE_FRIENDS = 'RECEIVE_FRIENDS';
export const RECEIVE_FRIEND = 'RECEIVE_FRIEND';
export const REMOVE_FRIEND = 'REMOVE_FRIEND';
export const RECEIVE_FRIEND_USERS = 'RECEIVE_FRIEND_USERS';

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

const removeFriend = friend => ({
  type: REMOVE_FRIEND,
  friend
})

const receiveFriendUsers = friends => ({
  type: RECEIVE_FRIEND_USERS,
  friends
})

export const addFriend = friendInfo => dispatch => (
  friendApiUtil.friendRequest(friendInfo)
    .then(friend => dispatch(receiveFriend(friend)))
)

export const deleteFriend = friendId => dispatch => (
  friendApiUtil.deleteFriend(friendId)
    .then((friend) => {
      return (dispatch(removeFriend(friend)))})
)

export const allFriends = (userId) => dispatch => {
  return (friendApiUtil.allFriends(userId)
  .then(friends => dispatch(receiveFriends(friends))))
}

export const findFriend = (friendUserId) => dispatch => (
  friendApiUtil.findFriend(friendUserId)
    .then(friend => dispatch(receiveFriend(friend)))
)

export const allFriendUsers = (userId) => dispatch => (
  friendApiUtil.allFriendUsers(userId)
    .then(friends => dispatch(receiveFriendUsers(friends)))
)