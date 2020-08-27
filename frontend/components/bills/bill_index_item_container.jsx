import { connect } from 'react-redux';
import BillIndexItem from './bill_index_item';
import { openModal } from '../../actions/modal_actions';
import { deleteBill, allBills } from '../../actions/bill_actions';
import { allFriendUsers } from '../../actions/friend_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
  partnerOne: state.entities.users[ownProps.bill.partners[0].userId],
  firstPay: ownProps.bill.partners[0],
  partnerTwo: state.entities.users[ownProps.bill.partners[1].userId],
  secondPay: ownProps.bill.partners[1],
  bill: ownProps.bill,
  userId: state.session.id
})
}

const mapDispatchToProps = dispatch => {
  return ({
  openModal: (modal, objectId) => dispatch(openModal(modal, objectId)),
  deleteBill: billId => dispatch(deleteBill(billId)),
  allFriendUsers: () => dispatch(allFriendUsers()),
})
}

export default connect(mapStateToProps, mapDispatchToProps)(BillIndexItem);