import React from 'react';
import { connect } from 'react-redux';
import BillForm from './_bill_form';
import { updateBill } from '../../actions/bill_actions';
import { closeModal } from '../../actions/modal_actions';
import { ensureDecimal, calculateSplit } from '../../util/bill_api_util';

const mapStateToProps = (state, ownProps) => {
  const bill = state.entities.bills[ownProps.billId]
  debugger
  const friendId = bill.partners[0].userId === state.session.id ? bill.partners[1].userId : bill.partners[0].userId;
  debugger
  return ({
  formType: 'Edit expense',
  userId: state.session.id,
  friends: Object.values(state.entities.users),
  bill: {
    id: ownProps.billId,
    description: bill.description,
    amount: ensureDecimal(bill.amount),
    category: bill.category,
    split: calculateSplit(bill.amount),
    split_equally: bill.split_equally,
    paid_up: bill.paid_up,
    partner_one_id: bill.partner_one_id,
    partner_two_id: bill.partner_two_id,
    partner_one_paid_share: ensureDecimal(bill.partners[0].paidShare),
    partner_one_owed_share: ensureDecimal(bill.partners[0].owedShare),
    partner_two_paid_share: ensureDecimal(bill.partners[1].paidShare),
    partner_two_owed_share: ensureDecimal(bill.partners[1].paidShare),
    friendName: state.entities.users[friendId].name,
    author_id: bill.author_id,
  }
})
}

const mapDispatchToProps = dispatch => ({
  processForm: bill => dispatch(updateBill(bill)),
  closeModal: () => dispatch(closeModal()),
})

export default connect(mapStateToProps, mapDispatchToProps)(BillForm);