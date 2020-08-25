import React from 'react';
import { connect } from 'react-redux';
import BillForm from './_bill_form';
import { createBill } from '../../actions/bill_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
  formType: 'Add an expense',

})

const mapDispatchToProps = dispatch => ({
  processForm: bill => dispatch(createBill(bill)),
  closeModal: () => dispatch(closeModal()),
  otherForm: (
    <button onClick={() => dispatch(openModal())}>Add an expense</button>
  ) 
})

export default connect(mapStateToProps, mapDispatchToProps)(BillForm);