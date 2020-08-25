import { RECEIVE_BILL_ERRORS, CLEAR_BILL_ERRORS } from '../actions/bill_actions';

const billErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BILL_ERRORS:
      debugger
      return action.errors.responseJSON;
    case CLEAR_BILL_ERRORS:
      return [];
    default:
      return state;
  }
}

export default billErrorsReducer;