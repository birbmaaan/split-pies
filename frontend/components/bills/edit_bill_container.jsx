import React from 'react';
import { connect } from 'react-redux';
import BillForm from './_bill_form';
import { updateBill } from '../../actions/bill_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  debugger
  return ({
  formType: 'Edit expense',
  userId: state.session.id,
  bill: state.entities.bills[ownProps.billId]
})
}

const mapDispatchToProps = dispatch => ({
  processForm: bill => dispatch(updateBill(bill)),
  closeModal: () => dispatch(closeModal()),
})

export default connect(mapStateToProps, mapDispatchToProps)(BillForm);