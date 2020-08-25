import React from 'react';
import DashHeader from '../dashboard/_dash_header';
import BillIndexItemContainer from './bill_index_item_container';

class BillIndex extends React.Component {
  constructor(props) {
    super(props)
    
    // this.calculateTotal = this.calculateTotal.bind(this);
    // this.renderBalance = this.renderBalance.bind(this);
  }

  renderBalance() {
    const total = this.props.calculateTotal(this.props.bills, this.props.userId);
    if (total > 0) {
      return (
        <div className='cash-money'>
          <h3>you are owed</h3>
          <h4>${total}</h4>
        </div>
      )
    } else if (total < 0) {
      let newTotal = -(total) 
      return (
        <div className="in-the-red">
          <h3>you owe</h3>
          <h4>${newTotal}</h4>
        </div>
      )
    } else {
      return (
        <p>You are all settled up</p>
      )
    }
  }

  componentDidMount() {
    this.props.allBills()
  }

  render() {
    if (this.props.bills.length === 0) return null;
    const balance = this.renderBalance();
    return (
      <div className="dash-content-container">
        <section className="main-content-center">
          <DashHeader
            name={"All expenses"}
            registered={true}
          />
          <ul>
            {this.props.bills.map(((bill) => (
              <BillIndexItemContainer bill={bill} key={bill.id} />
            )))}
          </ul>
        </section>
        <section className='main-content-right'>
          <h1>YOUR TOTAL BALANCE</h1>
          {balance}
        </section>
      </div>
    )
  }
}

export default BillIndex;