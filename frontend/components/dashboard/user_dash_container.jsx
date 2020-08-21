import React from 'react';
import { connect } from 'react-redux';
import UserDash from './user_dash';

const mapStateToProps = state => {
  return ({
  user: state.entities.users[state.session.id]
  })
}

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(UserDash);