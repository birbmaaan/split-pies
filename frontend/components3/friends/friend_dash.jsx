import React from 'react';
import BillIndexContainer from '../bills/bill_index_container';

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
      <BillIndexContainer friend={this.props.friend} friendId={this.props.friend.id} />
    )
  }
}

export default FriendDash
