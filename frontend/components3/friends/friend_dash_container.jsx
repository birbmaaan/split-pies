import React from 'react';
import { connect } from 'react-redux';
import FriendDash from './friend_dash';
import { deleteFriend, findFriend } from '../../actions/friend_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return ({
    key: ownProps.match.params.id,
    friend: state.entities.users[ownProps.match.params.id],
    userId: state.session.id,
    friendAssocs: state.entities.friends
  })
}

const mapDispatchToProps = dispatch => ({
  deleteFriend: friendId => dispatch(deleteFriend(friendId)),
  findFriend: friendUserId => dispatch(findFriend(friendUserId))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FriendDash))