import React from 'react';
import DashHeader from '../dashboard/_dash_header';
import BillIndexItemContainer from './bill_index_item_container';
import FriendSettingsContainer from '../friends/friend_settings_container';
import RightColumn from '../dashboard/right_column';

class BillIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
      bills: this.props.bills
    })
  }

  renderBalance() {
    let total = this.props.calculateTotal(this.state.bills, this.props.userId);
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

  limitToFriendBills() {
    const that = this;
    let friendBills = [];
    this.props.bills.forEach((bill) => {
      if (bill.partners[0].userId === that.props.friendId || 
          bill.partners[1].userId === that.props.friendId) {
        friendBills.push(bill);
      }
    })
    this.setState({bills: friendBills})
  }

  componentDidMount() {
    if (this.props.friendId) {
      this.props.allBills().then(() => this.limitToFriendBills());
    } else {
      this.props.allBills();
    }
  }
  
  render() {
    let name;
    let registered;
    if (this.props.friend) {
      name = this.props.friend.name;
      registered = this.props.friend.registered;
    } else {
      name = 'All expenses';
      registered = true;
    }
    const centerContent = this.state.bills.length === 0 ? (
        <section className="main-content-center">
          <DashHeader
            name={name}
            registered={registered}
          />
          <div className="dash-expenses">
            <img src={window.nobill} alt="all paid up!" />
            <div>
              <h1>You have not added any expenses yet</h1>
              <p>To add a new expense, click the orange "Add an expense" button.</p>
            </div>
          </div>
        </section>
    ) : (
      <section className="main-content-center">
        <DashHeader
          name={name}
          registered={registered}
        />
        <ul>
          {this.state.bills.map(((bill) => (
            <BillIndexItemContainer bill={bill} key={bill.id} />
          )))}
        </ul>
      </section>
    )
    const balance = this.renderBalance();

    const friendSettings = this.props.friendId ? (
      <FriendSettingsContainer friendId={this.props.friendId} />
    ) : (
      null
    )

    return (
      <div className="dash-content-container">
        {centerContent}
        <RightColumn 
            bills={this.state.bills} 
            userId={this.props.userId}
            friendId={this.props.friendId}
            calculateTotal={this.props.calculateTotal}/>
      </div>
    )
  }
}

export default BillIndex;