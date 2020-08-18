import React from 'react';  
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    const menu = this.props.currentUser ? (
      <div>
        <h1>Hello {this.props.currentUser.username}</h1>
        <button onClick={this.props.logout}>Log out</button>
      </div>
    ) : (
      <div>
        <Link to='/login'>Log in</Link>
        <Link to='/signup'>Sign up</Link>
      </div>
    )

    return (
      <div>
        <header className='navbar'>
          <Link to='/'>Splitwise</Link>
          <h2>This is the navbar</h2>
          {menu}
        </header>
      </div>
    )
  }
}

export default Navbar;