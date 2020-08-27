import React from 'react';
import BillIndexItemContainer from '../../bills/bill_index_item_container';
import NoExpenses from '../bills_dash/no_expenses';

class FriendBillIndex extends React.Component {
  constructor(props) {
    super(props)
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
  }

  componentDidMount() {
    this.props.allBills()
  }

  render() {
    if (this.props.bills.length === 0) return (<NoExpenses />)
    return (
      <div className="main-content-bill-index">
        <ul>
          {this.props.bills.map(((bill) => (
            <BillIndexItemContainer bill={bill} key={bill.id} />
          )))}
        </ul>
      </div>
    )
  }
}

export default FriendBillIndex;