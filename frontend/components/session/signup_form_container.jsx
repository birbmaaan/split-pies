import React from 'react';
import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signup, login, clearSessionErrors } from '../../actions/session_actions'
import { Link } from 'react-router-dom';

const mapStateToProps = ({errors}) => ({
  errors: errors.session,
  navLink: <Link to="/signup">sign up</Link>
})

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
  login: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearSessionErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);