import React from 'react';
import { Link } from 'react-router-dom';

const FriendIndexItem = (props) => {
  // const friend = friend.registered ? (
  //   props.friend.name
  // ) : (
  //   props.friend.email
  // )
  return (
    <li><Link to={`/friends/${props.friend.id}`}>{props.friend.name}</Link></li>
  )
}

export default FriendIndexItem;