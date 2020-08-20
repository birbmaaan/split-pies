import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FriendDashContainer from '../friends/friend_dash_container';
import FriendsContainer from '../friends/friends_container';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friendId: ''
    }
  }

  render() {
    return (
    <div>
      <section className="main-content-left">
        <div className="recent-activity">
          <h1>Recent activity</h1>
          <ul> 
            <li>transactions</li>
          </ul>
          <h2>Filter by name</h2>
          <h2>All expenses</h2>
        </div>

        <div className='groups'>
          <h1>same formatting as friends</h1>
        </div>

        <FriendsContainer friendId={this.state.friendId}/>
      </section>

      <section className='main-content-center'>
        <Switch>
          {/* <Route path='/dashboard' component={DashboardContainer}/> */}
          {/* <Route path={`/groups/${groupId}`} component={GroupDashContainer}/> */}
          <Route path={`/groups/${this.state.friendId}`} component={FriendDashContainer}/>
        </Switch>
      </section>

      <section className="main-content-right">
        <h1>GET SPLITWISE PRO!</h1>
      </section>
    </div>
    )
  }
}

export default Dashboard;