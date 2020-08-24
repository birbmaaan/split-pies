import React from 'react';

class BillIndexItem extends React.Component {

  render () {
    let billAuthor = this.props.bill.createdBy === this.props.partnerOne.id ? 
    this.props.partnerOne.name : this.props.partnerTwo.name ;
    let date = this.props.bill.createdAt;
    return (
      <div className="bill-index-item">
        <div className='bill-index-item-info'>
          <img src="" alt="category-icon"/>
          <div>
            <h1>{this.props.bill.description}</h1>
            <h3>${this.props.bill.amount}</h3>
            <p>Added by {billAuthor} on {date}</p>
            <button className="orange-btn">Edit expense</button>
          </div>
        </div>
        <div className='bill-index-item-breakdown'>
          <ul>
            <li key={this.props.partnerOne.userId}><p>
              <strong>{this.props.partnerOne.name}</strong> paid 
              <strong> ${this.props.firstPay.paidShare}</strong> and owes
              <strong> ${this.props.secondPay.owedShare}</strong>
            </p></li>
            <li key={this.props.secondPay.userId}><p>
              <strong>{this.props.partnerTwo.name}</strong> owes
              <strong> ${this.props.secondPay.owedShare}</strong>
            </p></li>
          </ul>
          <div>
            <h1>SPENDING BY CATEGORY</h1>
            <h1>NOTES AND COMMENTS</h1>

          </div>
        </div>
      </div>
    )
  }
}

export default BillIndexItem;