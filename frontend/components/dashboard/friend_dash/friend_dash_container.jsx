import React from 'react';
import { connect } from 'react-redux';
import FriendDash from './friend_dash';
import { withRouter } from 'react-router-dom';
import { findFriend } from '../../../actions/friend_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    key: ownProps.match.params.id,
    friend: state.entities.users[ownProps.match.params.id],
  })
}

const mapDispatchToProps = dispatch => ({
  findFriend: friendId => dispatch(findFriend(friendId))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FriendDash))