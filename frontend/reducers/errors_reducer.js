import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import billErrorsReducer from './bill_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  bills: billErrorsReducer
})

export default errorsReducer;