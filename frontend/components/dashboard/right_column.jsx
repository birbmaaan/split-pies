import React from 'react';
import FriendSettingsContainer from '../friends/friend_settings_container';
import { calculateTotal } from '../../util/bill_api_util';
import { connect } from 'react-redux';

class RightColumn extends React.Component {

  renderBalance() {
    let total = this.props.calculateTotal(this.props.bills, this.props.userId);
    if (total > 0) {
      return (
        <div className='cash-money'>
          <h3>you are owed</h3>
          <h4>${total}</h4>
        </div>
      )
    } else if (total < 0) {
      total = total.slice(1)
      return (
        <div className="in-the-red">
          <h3>you owe</h3>
          <h4>${total}</h4>
        </div>
      )
    } else {
      return (
        <p>You are all settled up</p>
      )
    }
  }
  
  render() {
    const balance = this.renderBalance();

    const friendSettings = this.props.friendId ? (
      <FriendSettingsContainer friendId={this.props.friendId} />
    ) : (
      null
    )

    return (
      <div className='main-content-right'>
        <h1>YOUR TOTAL BALANCE</h1>
        {balance}
        {friendSettings}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  debugger 
  let friendBills = [];
  let allBills = Object.values(state.entities.bills)
  if (ownProps.friendId) {
    allBills.forEach((bill) => {
      if (bill.partners[0].userId === ownProps.friendId ||
        bill.partners[1].userId === ownProps.friendId) {
          friendBills.push(bill);
        } else {
          friendBills = allBills
        }
      }) 
  }
  debugger
  return ({
    userId: state.session.id,
    friendId: ownProps.friendId,
    bills: friendBills,
  })
}

const mapDispatchToProps = dispatch => ({
  calculateTotal: calculateTotal
})

export default connect(mapStateToProps, mapDispatchToProps)(RightColumn);