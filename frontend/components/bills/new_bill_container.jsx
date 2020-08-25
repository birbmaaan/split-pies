import React from 'react';
import { connect } from 'react-redux';
import BillForm from './_bill_form';
import { createBill } from '../../actions/bill_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
  formType: 'Add an expense',
  userId: state.session.id,
  bill: {
    description: '',
    amount: '',
    category: 'general',
    split: '0.00',
    split_equally: true,
    paid_up: false,
    partner_one_id: state.session.id,
    partner_two_id: '',
    partner_one_paid_share: '',
    partner_one_owed_share: '',
    partner_two_paid_share: '0.00',
    partner_two_owed_share: '0.00',
  }
})

const mapDispatchToProps = dispatch => ({
  processForm: bill => dispatch(createBill(bill)),
  closeModal: () => dispatch(closeModal()),
})

export default connect(mapStateToProps, mapDispatchToProps)(BillForm);