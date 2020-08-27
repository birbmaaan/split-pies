import React from 'react';
import BillIndexItemContainer from './bill_index_item_container';
import NoExpenses from '../dashboard/bills_dash/no_expenses';

class BillIndex extends React.Component {
  componentDidMount() {
   this.props.allBills();
  }
  
  render() {
    const billIndex = (!this.props.bills || this.props.bills.length === 0) ? ( 
      <div>
        <NoExpenses />
      </div>
    ) : (
      <div className="main-content-bill-index">
        <ul>
          {this.props.bills.map(((bill) => (
            <BillIndexItemContainer bill={bill} key={bill.id} />
          )))}
        </ul>
      </div>
    )
    return (
      billIndex
    )
  }
}

export default BillIndex;