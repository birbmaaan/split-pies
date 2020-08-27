import React from 'react';
import { connect } from 'react-redux';
import UserDash from './user_dash';
import { openModal } from '../../../actions/modal_actions';

const mapStateToProps = state => {
  return ({
  user: state.entities.users[state.session.id]
  })
}

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserDash);