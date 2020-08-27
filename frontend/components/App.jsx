import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import DashboardContainer from './dashboard/dashboard_container';
import Splash from './splash_page/splash';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal';

const App = () => (
  <div className="main-app">
    <Modal />
    <header>
      <NavbarContainer />
    </header>

    <AuthRoute exact path='/' component={Splash} />
    <AuthRoute path='/login' component={LoginFormContainer} />
    <AuthRoute path='/signup' component={SignupFormContainer} />
    <ProtectedRoute path='/friends' component={DashboardContainer} />
    <ProtectedRoute path='/dashboard' component={DashboardContainer} />
    <ProtectedRoute path='/all' component={DashboardContainer} />
    <ProtectedRoute path='/activity' component={DashboardContainer} />
  </div>
);

export default App;