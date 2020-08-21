import React from 'react';
import FriendSettingsContainer from './friend_settings_container';
import DashHeader from '../dashboard/_dash_header';
import { withRouter } from 'react-router-dom'

class FriendDash extends React.Component {
  componentDidMount() {
    this.props.findFriend(this.props.friendId)
  }

  render() {
    if (!this.props.friend) return null;
    let friendAssocId;
    let userFriendId = this.props.friend.id
    if (!friendAssocId) {
      Object.values(this.props.friendAssocs).forEach((friend => {
      if (friend.friend_id === userFriendId) {
        friendAssocId = friend.id
      }
    }))
    }
    return (
      <div className="dash-content-container">
        <section className="main-content-center">
          <DashHeader 
            name={this.props.friend.name}
            registereed={this.props.friend.registered}
          />
        </section>
        <section className='main-content-right'>
          <h1>YOUR BALANCE</h1>
          <p>You are all settled up</p>
          <FriendSettingsContainer friendId={friendAssocId} />
        </section>
      </div>
    )
  }
}

export default FriendDash