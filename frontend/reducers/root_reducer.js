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
  if (action.type === LOGOUT_CURRENT_USER) {
    state = undefined;
  }

  return appReducer(state, action)
}

export default rootReducer;