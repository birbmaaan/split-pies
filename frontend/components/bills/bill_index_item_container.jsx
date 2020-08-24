import { connect } from 'react-redux';
import BillIndexItem from './bill_index_item';

const mapStateToProps = (state, ownProps) => {
  return ({
  partnerOne: state.entities.users[ownProps.bill.partners[0].userId],
  firstPay: ownProps.bill.partners[0],
  partnerTwo: state.entities.users[ownProps.bill.partners[1].userId],
  secondPay: ownProps.bill.partners[1],
  bill: ownProps.bill,
})
}

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(BillIndexItem)