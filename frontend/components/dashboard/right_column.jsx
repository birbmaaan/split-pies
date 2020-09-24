import React from 'react';
import FriendSettingsContainer from '../friends/friend_settings_container';
import { calculateTotal } from '../../util/bill_api_util';
import { connect } from 'react-redux';
import { allBills } from '../../actions/bill_actions';

class RightColumn extends React.Component {
  componentDidMount() {
    this.props.allBills();
  }

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
  const { friendId } = ownProps; 

  let friendBills = [];
  let allBills = Object.values(state.entities.bills)
  if (friendId) {
    allBills.forEach((bill) => {
      if (bill.partners[0].userId === friendId ||
        bill.partners[1].userId === friendId) {
          friendBills.push(bill);
        } 
      }) 
  } else {
    friendBills = allBills;
  }
  return ({
    userId: state.session.id,
    friendId: friendId,
    bills: friendBills,
  })
}

const mapDispatchToProps = dispatch => ({
  calculateTotal: calculateTotal,
  allBills: () => dispatch(allBills()),
})

export default connect(mapStateToProps, mapDispatchToProps)(RightColumn);