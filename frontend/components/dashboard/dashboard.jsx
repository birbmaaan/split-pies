import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import FriendDashContainer from '../dashboard/friend_dash/friend_dash_container';
import FriendsContainer from '../friends/friends_container';
import UserDashContainer from './user_dash/user_dash_container';
import BillsDashContainer from './bills_dash/bills_dash_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
    <div className='dashboard-container'>
      <section className="main-content-left">
        <h1><Link to='/dashboard'>Dashboard</Link></h1>
        <div className="recent-activity">
          <h1><Link to="/activity">Recent activity</Link></h1>
          <input type="text" placeholder="Filter by name" />
          <p><Link to="/all">All expenses</Link></p>
        </div>

        <button 
          className='green-btn feedback-modal-button' 
          onClick={() => this.props.openModal('feedback')}
        >
          Feedback
        </button>
        <FriendsContainer />
        <div className="about-links">
          <a href="https://github.com/birbmaaan/">
            <FontAwesomeIcon className="icon-links" icon={faGithubSquare} />
          </a>
          <a href="https://www.linkedin.com/in/elijah-dove-4770b3184/">
            <FontAwesomeIcon className="icon-links" icon={faLinkedin} />
          </a>
        </div>
      </section>

        <Switch>
          <Route path='/dashboard' component={UserDashContainer} />
          <Route path={`/friends/:id`} component={FriendDashContainer} />
          <Route path='/all' component={BillsDashContainer} />
          <Route path='/activity' component={BillsDashContainer} />
        </Switch>
    </div>
    )
  }
}

export default Dashboard;