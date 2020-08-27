import React from 'react';
import DashHeader from './_dash_header'
import DashExpensesContainer from './dash_expenses_container';

class UserDash extends React.Component {

  render() {
    return(
      <div className="dash-content-container">
        <section className="main-content-center">
          <DashHeader
            registered={this.props.user.registered} 
            name={this.props.user.name}
            openModal={this.props.openModal}  
          />
          <DashExpensesContainer />
        </section>

        <section className="main-content-right">
          <h1>GET SPLITWISE PRO!</h1>
        </section>
      </div>
    )
  }
}

export default UserDash;