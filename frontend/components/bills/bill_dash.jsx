import React from 'react';

class BillDash extends React.Component {

  render() {
    return (
      <div className="dash-content-container">
        <section className="main-content-center">
          <DashHeader
            name={"All expenses"}
            registered={true}
          />
          <ul>
            {this.state.bills.map(((bill) => (
              <BillIndexItemContainer bill={bill} key={bill.id} />
            )))}
          </ul>
        </section>

        <RightColumn
          bills={this.state.bills}
          userId={this.props.userId}
          friendId={this.props.friendId}
          calculateTotal={this.props.calculateTotal} />
      </div>
    )
  }
}

export default BillDash;