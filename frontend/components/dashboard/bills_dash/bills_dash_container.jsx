import { connect } from 'react-redux';
import BillsDash from './bills_dash';
import { allBills } from '../../../actions/bill_actions';

const mapDispatchToProps = dispatch => ({
  allBills: () => dispatch(allBills())
})

export default connect(mapDispatchToProps)(BillsDash);