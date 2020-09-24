import React from 'react';

class DashExpenses extends React.Component {
  componentDidMount() {
    this.props.allBills();
  }

  renderBalance() {
    let total = this.props.calculateTotal(this.props.bills, this.props.userId);
    if (total > 0) {
      return (
        <div className='cash-money'>
          <p>+ ${total}</p>
        </div>
      )
    } else if (total < 0) {
      total = total.slice(1)
      return (
        <div className="in-the-red">
          <p>- ${total}</p>
        </div>
      )
    } else {
      return (
        <p>$0.00</p>
      )
    }
  }

  renderOwed() {
    let total = this.props.calculateTotalOwed(this.props.bills, this.props.userId, 'owed');
    if (total > 0) {
      return (
        <div className='in-the-red'>
          <p>${total}</p>
        </div>
      )
    } else {
      return (<p>$0.00</p>)
    }
  }

  renderLent() {
    let total = this.props.calculateTotalOwed(this.props.bills, this.props.userId, 'lent');
    if (total > 0) {
      return (
        <div className='cash-money'>
          <p>${total}</p>
        </div>
      )
    } else {
      return (<p>$0.00</p>)
    }
  }

  render() {
    const balance = this.renderBalance();
    const owed = this.renderOwed();
    const lent = this.renderLent();

    const bills = this.props.bills.length === 0 ? (
      <div className="dash-expenses">
        <img src={window.nobill} alt="all paid up!" /> 
        <div>
          <h1>You have not added any expenses yet</h1>
          <p>To add a new expense, click the orange "Add an expense" button.</p>
        </div>
      </div>
    ) : (
      <div className="dash-expenses-breakdown">
        <ul className="expenses-header">
          <li>
            <h1>total balance</h1>
            {balance}
          </li>
          <li>
            <h1>you owe</h1>
            {owed}
          </li>
          <li>
            <h1>you are owed</h1>
            {lent}
          </li>
        </ul>
        <ul className='expenses-body'>
          <li>
            <h1>YOU OWE</h1>
            {owed}
          </li>
          <li>
            <h1>YOU ARE OWED</h1>
            {lent}
          </li>
        </ul>
      </div>
    )

    return bills;
  }
}

export default DashExpenses;