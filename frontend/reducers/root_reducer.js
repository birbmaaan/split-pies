import { combineReducers } from 'redux'; 
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import entitiesReducer from './entities_reducer';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const appReducer = combineReducers({
  errors: errorsReducer,
  session: sessionReducer,
  entities: entitiesReducer
})

const rootReducer = (state, action) => {
  Object.freeze(state)
  let newState;
  if (action.type === LOGOUT_CURRENT_USER) {
    newState = undefined;
  } else {
    newState = Object.assign({}, state);
  }

  return appReducer(newState, action)
}

export default rootReducer;