import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import friendsReducer from './friends_reducer';
import billsReducer from './bills_reducer';
import commentsReducer from './comments_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  friends: friendsReducer,
  bills: billsReducer,
  comments: commentsReducer,
})

export default entitiesReducer;