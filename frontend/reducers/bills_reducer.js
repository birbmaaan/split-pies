import { RECEIVE_BILLS, RECEIVE_BILL, REMOVE_BILL } from '../actions/bill_actions';

const billsReducer = (state = {}, action) => {
  Object.freeze(state);

  let newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_BILLS:
      const bills = Object.values(action.bills)
      bills.forEach((bill) => {
        newState[bill.id] = bill
      })
      return newState;
    case RECEIVE_BILL:
      newState[action.bill.id] = action.bill;
    case REMOVE_BILL:
      delete newState[action.bill.id]
      return newState;
    default:
      return state;
  }
} 

export default billsReducer;