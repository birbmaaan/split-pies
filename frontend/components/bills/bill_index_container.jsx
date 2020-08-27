import { connect } from 'react-redux';
import BillIndex from './bill_index';
import { allBills } from '../../actions/bill_actions';

const mapStateToProps = state => {
  return ({
  bills: Object.values(state.entities.bills),
})
}

const mapDispatchToProps = dispatch => ({
  allBills: () => dispatch(allBills()),
})

export default connect(mapStateToProps, mapDispatchToProps)(BillIndex)