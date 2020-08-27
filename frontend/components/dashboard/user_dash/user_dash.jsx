import React from 'react';
import DashHeader from '../dash_header'
import DashExpensesContainer from '../dash_expenses_container';

class UserDash extends React.Component {
  componentDidMount() {
    this.props.allFriends()
  }

  render() {
    if (!this.props.user) return null;
    return(
      <div className="dash-content-container">
        <section className="main-content-center">
          <DashHeader
            registered={this.props.user.registered} 
            name={'Dashboard'}
            openModal={this.props.openModal}  
          />
          <DashExpensesContainer />
        </section>

        <section className="main-content-right">
          <h1>GET SPLITWISE PRO!</h1>
          <p>&#60;not available in your region&#62;</p>
        </section>
      </div>
    )
  }
}

export default UserDash;