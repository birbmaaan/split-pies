import React from 'react';
import { connect } from 'react-redux';
import UserDash from './user_dash';
import { openModal } from '../../../actions/modal_actions';
import { allFriends } from '../../../actions/friend_actions';

const mapStateToProps = state => {
  return ({
  user: state.entities.users[state.session.id]
  })
}

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  allFriends: () => dispatch(allFriends())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserDash);