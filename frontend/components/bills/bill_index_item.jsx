import React from 'react';
import CommentIndexContainer from '../comments/comment_index_container';

class BillIndexItem extends React.Component {
  componentDidMount() {
    this.props.allFriendUsers();
  }

  render () {
    const { partnerOne, partnerTwo, firstPay, secondPay, bill, userId } = this.props;

    if (!partnerOne || !partnerTwo) return null;
    let billAuthor = bill.createdBy === partnerOne.id ? 
    partnerOne.name : partnerTwo.name ;
    let date = bill.createdAt;
    let payer;
    let borrower;
    let amountLent;
    if (userId === partnerOne.id) {
      payer = 'you';
      borrower = partnerTwo.name;
      amountLent = (<p className="cash-money">${parseFloat(firstPay.owedShare).toFixed(2)}</p>)
    } else {
      payer = partnerOne.name;
      borrower = 'you';
      amountLent = (<p className="in-the-red">${parseFloat(firstPay.owedShare).toFixed(2)}</p>)
    }

    return (
      <div className="bill-index-item">

        <div className='bill-index-item-header'>
          <div className="bill-index-item-header-left">
            <p>{bill.description}</p>
          </div>
          <div className='bill-index-item-header-right'>
            <div className="bill-index-item-header-paid">
              <h4>{payer} paid</h4>
              <p>${parseFloat(bill.amount).toFixed(2)}</p>
            </div>
            <div className="bill-index-item-header-lent">
              <h4>{payer} lent {borrower}</h4>
              {amountLent}
            </div>
            <button onClick={() => this.props.deleteBill(bill.id)}>x</button>
          </div>
        </div>

        <div className='bill-index-item-main'>
          <div className='bill-index-item-info'>
            <img src={window.catGeneral} alt="category-icon"/>

            <div>
              <h1>{bill.description}</h1>
              <h3>${parseFloat(bill.amount).toFixed(2)}</h3>
              <p>Added by {billAuthor} on {date}</p>
              <button className='orange-btn' onClick={() => this.props.openModal('editBill', bill.id)}>Edit expense</button>
            </div>
          </div>

          <div className='bill-index-item-breakdown'>
            <ul>
              <li key={partnerOne.id}><p>
                <strong>{partnerOne.name}</strong> paid 
                <strong> ${parseFloat(firstPay.paidShare).toFixed(2)}</strong> and owes
                <strong> ${parseFloat(secondPay.owedShare).toFixed(2)}</strong>
              </p></li>
              <li key={partnerTwo.id}><p>
                <strong>{partnerTwo.name}</strong> owes
                <strong> ${parseFloat(firstPay.owedShare).toFixed(2)}</strong>
              </p></li>
            </ul>
            <div>
              {/* <h1>SPENDING BY CATEGORY</h1> */}
              <h1>NOTES AND COMMENTS</h1>
              <CommentIndexContainer bill={bill}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BillIndexItem;