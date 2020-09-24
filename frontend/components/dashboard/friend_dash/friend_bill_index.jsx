import React from 'react';
import BillIndexItemContainer from '../../bills/bill_index_item_container';
import NoExpenses from '../bills_dash/no_expenses';

class FriendBillIndex extends React.Component {
  limitToFriendBills() {
    const { bills, friendId } = this.props;
    let friendBills = [];
    bills.forEach((bill) => {
      if (bill.partners[0].userId === friendId ||
        bill.partners[1].userId === friendId) {
        friendBills.push(bill);
      }
    })
  }

  componentDidMount() {
    this.props.allBills()
  }

  render() {
    const { bills } = this.props;

    if (bills.length === 0) return (<NoExpenses />)
    return (
      <div className="main-content-bill-index">
        <ul>
          {bills.map(((bill) => (
            <BillIndexItemContainer bill={bill} key={bill.id} />
          )))}
        </ul>
      </div>
    )
  }
}

export default FriendBillIndex;