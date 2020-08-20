import React from 'react';
import { Link } from 'react-router-dom';
import FriendIndexItem from './friends_index_item';
import FriendForm from './friend_form'

class FriendsIndex extends React.Component {

  componentDidMount() {
    this.props.allFriends(this.props.userId)
  }

  render() {
    return ( 
      <div className='friends-index-container'>
        <div className='friends-header'> 
          <h3>FRIENDS</h3>
          <Link to='/'>+ add</Link>
        </div>
        <ul className='friends-index'>
          {this.props.friends.map((friend) => (
            <FriendIndexItem
              key={friend.id}
              friend={friend}
            />
          ))}
        </ul>
        <FriendForm 
          addFriend={this.props.addFriend}
          userId={this.props.userId} 
        />
      </div>
    )
  }
}

export default FriendsIndex;