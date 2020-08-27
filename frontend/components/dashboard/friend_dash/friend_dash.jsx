import React from 'react';
import FriendBillIndexContainer from './friend_bill_index_container';
import DashHeader from '../dash_header';
import RightColumn from '../right_column';

class FriendDash extends React.Component {
  componentDidMount() {
    this.props.findFriend(this.props.match.params.id)
  }

  render() {
    if (!this.props.friend) return null;
    return (
      <div className='dash-content-container'>
        <section className='main-content-center'>
          <DashHeader 
            name={this.props.friend.name}
            registered={this.props.friend.registered}
          />
          <FriendBillIndexContainer friendId={this.props.friend.id}/>
        </section>
        <RightColumn friendId={this.props.friend.id}/>
      </div>
    )
  }
}

export default FriendDash
