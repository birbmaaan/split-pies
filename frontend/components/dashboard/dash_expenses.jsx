import React from 'react';

class DashExpenses extends React.Component {

  render() {
    return (
      <div className="dash-expenses">
        <img src="" alt="No expense guy"/>
        <div>
          <h1>You have not added any expenses yet</h1>
          <p>To add a new expense, click the orange "Add an expense" button.</p>
        </div>
      </div>
    )
  }
}

export default DashExpenses;