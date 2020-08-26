import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import FriendDashContainer from '../friends/friend_dash_container';
import FriendsContainer from '../friends/friends_container';
import UserDashContainer from './user_dash_container';
import BillIndexContainer from '../bills/bill_index_container';

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

        <div className='dashbar-header'>
          <h2>GROUPS</h2>
        </div>

        <FriendsContainer />
      </section>

        <Switch>
          <Route path='/dashboard' component={UserDashContainer} />
          <Route path={`/friends/:id`} component={FriendDashContainer} />
          <Route path='/all' component={BillIndexContainer} />
          <Route path='/activity' component={BillIndexContainer} />
        </Switch>
    </div>
    )
  }
}

export default Dashboard;