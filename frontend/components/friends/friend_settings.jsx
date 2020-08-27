import React from 'react'
import { Redirect } from 'react-router-dom'

class FriendSettings extends React.Component { 
  constructor(props) {
    super(props)
    this.state = {
      redirect: null
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.deleteFriend(this.props.friend.id)
    this.setState({redirect: '/dashboard'})
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
      <div className="friend-settings">
        <h1>FRIEND SETTINGS</h1>
        <button onClick={this.handleClick}>Remove this friend</button>
      </div>
  )
  } 
}

export default FriendSettings;