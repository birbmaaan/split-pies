import { connect } from 'react-redux';
import FriendBillIndex from './friend_bill_index';
import { allBills } from '../../../actions/bill_actions';

const mapStateToProps = (state, ownProps) => {
  const { friendId } = ownProps;

  let friendBills = [];
  let allBills = Object.values(state.entities.bills)
  if (allBills.length > 0) {
    allBills.forEach((bill) => {
      if (bill.partners[0].userId === friendId ||
        bill.partners[1].userId === friendId) {
        friendBills.push(bill);
      }
    }) 
  }
  return ({
  bills: friendBills,
  friendId: friendId
  })
}

const mapDispatchToProps = dispatch => ({
  allBills: () => dispatch(allBills()),
})

export default connect(mapStateToProps, mapDispatchToProps)(FriendBillIndex)