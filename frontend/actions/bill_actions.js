import * as billApi from '../util/bill_api_util';

export const RECEIVE_BILLS = 'RECEIVE_BILLS';
export const RECEIVE_BILL = 'RECEIVE_BILL';
export const REMOVE_BILL = 'REMOVE_BILL';
export const RECEIVE_BILL_ERRORS = 'RECEIVE_BILL_ERRORS';
export const CLEAR_BILL_ERRORS = 'CLEAR_BILL_ERRORS';

const receiveBills = bills => ({
  type: RECEIVE_BILLS,
  bills
})

const receiveBill = bill => ({
  type: RECEIVE_BILL,
  bill
})

const removeBill = billId => ({
  type: REMOVE_BILL,
  billId
})

export const receiveBillErrors = errors => ({
  type: RECEIVE_BILL_ERRORS,
  errors
})

export const clearBillErrors = () => ({
  type: CLEAR_BILL_ERRORS,
})

export const allBills = () => dispatch => (
  billApi.allBills()
    .then(bills => (dispatch(receiveBills(bills))),
    errors => dispatch(receiveBillErrors(errors)))
)

export const createBill = bill => dispatch => (
  billApi.createBill(bill)
    .then(newBill => dispatch(receiveBill(newBill)),
    errors => dispatch(receiveBillErrors(errors)))
)

export const updateBill = bill => dispatch => (
  billApi.updateBill(bill)
    .then(newBill => dispatch(receiveBill(bill)),
    errors => dispatch(receiveBillErrors(errors)))
)

export const findBill = billId => dispatch => (
  billApi.findBill(billId)
    .then(bill => dispatch(receiveBill(bill)),
    errors => dispatch(receiveBillErrors(errors)))
)

export const deleteBill = billId => dispatch => (
  billApi.deleteBill(billId)
    .then(bill => dispatch(removeBill(bill)),
    errors => dispatch(receiveBillErrors(errors))) 
)