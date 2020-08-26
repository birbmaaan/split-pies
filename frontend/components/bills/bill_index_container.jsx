import { connect } from 'react-redux';
import BillIndex from './bill_index';
import { allBills } from '../../actions/bill_actions';
import { openModal } from '../../actions/modal_actions';
import { calculateSplit, calculateTotal, convertToFloat } from '../../util/bill_api_util';

const mapStateToProps = (state, ownProps) => {
  const friendId = ownProps.friendId ? ownProps.friendId : null;
  const friend = ownProps.friend ? ownProps.friend : null;

  return ({
  key: friendId,
  bills: Object.values(state.entities.bills),
  userId: state.session.id,
  friendId: friendId,
  friend: friend,
  calculateSplit,
  calculateTotal,
  convertToFloat
})
}

const mapDispatchToProps = dispatch => ({
  allBills: () => dispatch(allBills()),
})

export default connect(mapStateToProps, mapDispatchToProps)(BillIndex)