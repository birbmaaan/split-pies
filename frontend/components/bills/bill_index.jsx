import React from 'react';
import DashHeader from '../dashboard/_dash_header';
import BillIndexItemContainer from './bill_index_item_container';

class BillIndex extends React.Component {
  componentDidMount() {
    this.props.allBills()
  }

  render() {
    if (this.props.bills.length === 0) return null;
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
          <p>You are all settled up</p>
         
        </section>
      </div>
    )
  }
}

export default BillIndex;