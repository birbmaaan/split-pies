import React from 'react';
import CommentIndexContainer from '../comments/comment_index_container';

class BillIndexItem extends React.Component {

  render () {
    let billAuthor = this.props.bill.createdBy === this.props.partnerOne.id ? 
    this.props.partnerOne.name : this.props.partnerTwo.name ;
    let date = this.props.bill.createdAt;
    let payer;
    let borrower;
    let amountLent;
    if (this.props.userId === this.props.partnerOne.id) {
      payer = 'you';
      borrower = this.props.partnerTwo.name;
      amountLent = (<p className="cash-money">${parseFloat(this.props.firstPay.owedShare).toFixed(2)}</p>)
    } else {
      payer = this.props.partnerOne.name;
      borrower = 'you';
      amountLent = (<p className="in-the-red">${parseFloat(this.props.firstPay.owedShare).toFixed(2)}</p>)
    }

    return (
      <div className="bill-index-item">

        <div className='bill-index-item-header'>
          <div className="bill-index-item-header-left">
            <p>{this.props.bill.description}</p>
          </div>
          <div className='bill-index-item-header-right'>
            <div className="bill-index-item-header-paid">
              <h4>{payer} paid</h4>
              <p>${parseFloat(this.props.bill.amount).toFixed(2)}</p>
            </div>
            <div className="bill-index-item-header-lent">
              <h4>{payer} lent {borrower}</h4>
              {amountLent}
            </div>
            <button onClick={() => this.props.deleteBill(this.props.bill.id)}>x</button>
          </div>
        </div>

        <div className='bill-index-item-main'>
          <div className='bill-index-item-info'>
            <img src={window.catGeneral} alt="category-icon"/>

            <div>
              <h1>{this.props.bill.description}</h1>
              <h3>${parseFloat(this.props.bill.amount).toFixed(2)}</h3>
              <p>Added by {billAuthor} on {date}</p>
              <button className='orange-btn' onClick={() => this.props.openModal('editBill', this.props.bill.id)}>Edit expense</button>
            </div>
          </div>

          <div className='bill-index-item-breakdown'>
            <ul>
              <li key={this.props.partnerOne.id}><p>
                <strong>{this.props.partnerOne.name}</strong> paid 
                <strong> ${parseFloat(this.props.firstPay.paidShare).toFixed(2)}</strong> and owes
                <strong> ${parseFloat(this.props.secondPay.owedShare).toFixed(2)}</strong>
              </p></li>
              <li key={this.props.partnerTwo.id}><p>
                <strong>{this.props.partnerTwo.name}</strong> owes
                <strong> ${parseFloat(this.props.firstPay.owedShare).toFixed(2)}</strong>
              </p></li>
            </ul>
            <div>
              <h1>SPENDING BY CATEGORY</h1>
              <h1>NOTES AND COMMENTS</h1>
              <CommentIndexContainer bill={this.props.bill}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BillIndexItem;