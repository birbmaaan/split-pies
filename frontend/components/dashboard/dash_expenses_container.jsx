import React from 'react';
import { connect } from 'react-redux';
import DashExpenses from './dash_expenses';
import { allBills } from '../../actions/bill_actions';
import { calculateTotal, calculateTotalOwed } from '../../util/bill_api_util';
import { allFriendUsers } from '../../actions/friend_actions';

const mapStateToProps = state => ({
  bills: Object.values(state.entities.bills),
  userId: state.session.id
})

const mapDispatchToProps = dispatch => ({
  allBills: () => dispatch(allBills()),
  calculateTotal: calculateTotal,
  calculateTotalOwed: calculateTotalOwed,
  allFriendUsers: () => dispatch(allFriendUsers()),
})

export default connect(mapStateToProps, mapDispatchToProps)(DashExpenses)