import React from 'react';
import FriendBillIndexContainer from './friend_bill_index_container';
import DashHeader from '../dash_header';
import RightColumn from '../right_column';

class FriendDash extends React.Component {
  componentDidMount() {
    this.props.findFriend(this.props.match.params.id)
  }

  render() {
    const { friend } = this.props;

    if (!friend) return null;
    return (
      <div className='dash-content-container'>
        <section className='main-content-center'>
          <DashHeader 
            name={friend.name}
            registered={friend.registered}
          />
          <FriendBillIndexContainer friendId={friend.id}/>
        </section>
        <RightColumn friendId={friend.id}/>
      </div>
    )
  }
}

export default FriendDash
