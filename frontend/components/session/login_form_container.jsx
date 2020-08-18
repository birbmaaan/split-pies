import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login, clearSessionErrors } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

const mapStateToProps = ({errors}) => ({
  errors: errors.session,
  navLink: <Link to='/login'>log in</Link>
})

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearSessionErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);