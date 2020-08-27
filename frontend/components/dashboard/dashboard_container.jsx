import React from 'react';
import { connect } from 'react-redux';
import Dashboard from './dashboard'
import { findFriend } from '../../actions/friend_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  findFriend: friendUserId => dispatch(findFriend(friendUserId)),
  openModal: (modal) => dispatch(openModal(modal))
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)