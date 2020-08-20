import React from 'react';
import { connect } from 'react-redux';
import FriendDash from './friend_dash';
import { deleteFriend } from '../../actions/friend_actions';

const mapStateToProps = (state, ownProps) => ({
  friend: state.entities.users[ownProps.friendId]
})

const mapDispatchToProps = dispatch => ({
  deleteFriend: friendId => dispatch(deleteFriend(friendId))
})

export default connect(mapStateToProps, mapDispatchToProps)(FriendDash)