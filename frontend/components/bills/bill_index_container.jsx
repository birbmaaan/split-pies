import { connect } from 'react-redux';
import BillIndex from './bill_index';
import { allBills } from '../../actions/bill_actions';
import { openModal } from '../../actions/modal_actions';
import { calculateSplit, calculateTotal, convertToFloat } from '../../util/bill_api_util';

const mapStateToProps = state => {
  return ({
  bills: Object.values(state.entities.bills),
  userId: state.session.id,
  calculateSplit,
  calculateTotal,
  convertToFloat
})
}

const mapDispatchToProps = dispatch => ({
  allBills: () => dispatch(allBills()),
})

export default connect(mapStateToProps, mapDispatchToProps)(BillIndex)