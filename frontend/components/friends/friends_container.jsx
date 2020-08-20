import React from 'react';
import { connect } from 'react-redux';
import FriendsIndex from './friends_index';
import { addFriend, deleteFriend, allFriends } from '../../actions/friend_actions'

const mapStateToProps = state => ({
  friends: Object.values(state.entities.friends),
  userId: state.session.id
})

const mapDispatchToProps = dispatch => ({
  addFriend: friendInfo => dispatch(addFriend(friendInfo)),
  deleteFriend: friendId => dispatch(deleteFriend(friendId)),
  allFriends: userId => dispatch(allFriends(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(FriendsIndex);