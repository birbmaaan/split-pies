import React from 'react';
import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signup } from '../../actions/session_actions'
import { Link } from 'react-router-dom';

const mapStateToProps = ({errors}) => ({
  errors: errors.session,
  navLink: <Link to="/signup">sign up</Link>
})

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);