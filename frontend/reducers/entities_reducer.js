import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import friendsReducer from './friends_reducer'

const entitiesReducer = combineReducers({
  users: usersReducer,
  friends: friendsReducer
})

export default entitiesReducer;