import React from 'react';
import { connect } from 'react-redux';
import FriendsIndex from './friends_index';
import { addFriend, deleteFriend, allFriends, findFriend, allFriendUsers } from '../../actions/friend_actions'
import { clearSessionErrors } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions'; 

const mapStateToProps = state => {
  return ({
  friends: state.entities.friends,
  userId: state.session.id,
  users: Object.values(state.entities.users),
  errors: state.errors.session
  })
}

const mapDispatchToProps = dispatch => ({
  addFriend: friendInfo => dispatch(addFriend(friendInfo)),
  deleteFriend: friendId => dispatch(deleteFriend(friendId)),
  allFriends: userId => dispatch(allFriends(userId)),
  findFriend: friendUserId => dispatch(findFriend(friendUserId)),
  allFriendUsers: userId => dispatch(allFriendUsers(userId)),
  clearErrors: () => dispatch(clearSessionErrors()),
  openModal: modal => dispatch(openModal(modal)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FriendsIndex);