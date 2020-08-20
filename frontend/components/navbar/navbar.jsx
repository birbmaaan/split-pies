import React from 'react';  
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    const menu = this.props.currentUser ? (
      <div className='navbar-right'>
        <p>Hello {this.props.currentUser.name}</p>
        <button className='green-btn' onClick={this.props.logout}>Log out</button>
      </div>
    ) : (
      <div className="navbar-right">
        <ul>
          <li><Link className='green-btn' to='/login'>Log in</Link></li>
          <p>or</p>
          <li><Link className='orange-btn' to='/signup'>Sign up</Link></li>
        </ul>
      </div>
    )

    return (
      <div>
        <header className='navbar'>
          <Link to='/'>SplitPies</Link>
          {menu}
        </header>
      </div>
    )
  }
}

export default Navbar;