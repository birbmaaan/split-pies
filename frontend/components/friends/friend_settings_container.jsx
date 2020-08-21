import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import FriendSettings from './friend_settings';

const mapStateToProps = (state, ownProps) => ({
  friendId: ownProps.friendId,
})

const mapDispatchToProps = dispatch => ({
  deleteFriend: friendId => dispatch(deleteFriend(friendId))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FriendSettings))