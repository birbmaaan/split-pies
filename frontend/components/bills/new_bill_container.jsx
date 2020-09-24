import React from 'react';
import { connect } from 'react-redux';
import BillForm from './bill_form';
import { createBill } from '../../actions/bill_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
  const friendsObject = Object.values(state.entities.users);
  const friends = friendsObject.filter(user => user.id !== state.session.id);

  return ({
    formType: 'Add an expense',
    userId: state.session.id,
    friends: friends,
    bill: {
      description: '',
      amount: '',
      category: '',
      split: '0.00',
      split_equally: true,
      paid_up: false,
      partner_one_id: '',
      partner_two_id: '',
      partner_one_paid_share: '',
      partner_one_owed_share: '',
      partner_two_paid_share: '0.00',
      partner_two_owed_share: '0.00',
      friend: {name: '', id: '', },
      author_id: state.session.id,
    }
  })
}

const mapDispatchToProps = dispatch => ({
  processForm: bill => dispatch(createBill(bill)),
  closeModal: () => dispatch(closeModal()),
})

export default connect(mapStateToProps, mapDispatchToProps)(BillForm);