import React from 'react';
import { Route } from 'react-router-dom';
import NavbarContainer from './navbar/navbar_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import DashboardContainer from './dashboard/dashboard_container';
import SplashContainer from './splash_page/splash_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal';

const App = () => (
  <div>
    <Modal />
    <header>
      <NavbarContainer />
    </header>

    <AuthRoute exact path='/' component={SplashContainer} />
    <AuthRoute path='/login' component={LoginFormContainer} />
    <AuthRoute path='/signup' component={SignupFormContainer} />
    <ProtectedRoute path='/friends' component={DashboardContainer} />
    <ProtectedRoute path='/dashboard' component={DashboardContainer} />
    <ProtectedRoute path='/all' component={DashboardContainer} />
  </div>
);

export default App;