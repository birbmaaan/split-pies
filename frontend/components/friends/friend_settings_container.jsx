import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import FriendSettings from './friend_settings';
import { deleteFriend } from '../../actions/friend_actions';

const mapStateToProps = (state, ownProps) => {
  let friendAssociationId;
  let friendAssociations = Object.values(state.entities.friends);
  if (friendAssociations.length > 0) {
    friendAssociations.forEach((friend) => {
      if (friend.friend_id === ownProps.friendId) friendAssociationId = friend.id
    })
  }
  return ({
  friend: state.entities.friends[friendAssociationId]
})
}

const mapDispatchToProps = dispatch => {
  return ({
  deleteFriend: friendId => dispatch(deleteFriend(friendId))
})
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FriendSettings))