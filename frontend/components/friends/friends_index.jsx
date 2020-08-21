import React from 'react';
import { Link } from 'react-router-dom';
import FriendIndexItem from './friends_index_item';
import FriendForm from './friend_form'

class FriendsIndex extends React.Component {

  componentDidMount() {
    this.props.allFriends(this.props.userId)
    this.props.allFriendUsers(this.props.userId);
  }

  render() {
    const friendUsers = []
    this.props.users.forEach((user) => {
      if (user.id !== this.props.userId) friendUsers.push(user); 
    })

    return ( 
      <div className='friends-index-container'>
        <div className='dashbar-header'> 
          <h2>FRIENDS</h2>
          <p><Link to='/'>+ add</Link></p>
        </div>
        <ul className='friends-index'>
          {friendUsers.map((friendUser) => {

            return (
            <FriendIndexItem
              key={friendUser.id}
              friendId={this.props.friends[friendUser.id]}
              findFriend={this.props.findFriend}
              friend={friendUser}
            />
          )})}
        </ul>
        <FriendForm 
          addFriend={this.props.addFriend}
          userId={this.props.userId}
          errors={this.props.errors}
          clearErrors={this.props.clearErrors}
        />
      </div>
    )
  }
}

export default FriendsIndex;