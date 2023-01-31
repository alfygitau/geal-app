import { combineReducers } from 'redux';
import {usersReducers} from "./usersReducer";
import {roleReducer} from "./roleReducer";


const rootReducer = combineReducers({
  usersAction: usersReducers,
  roleAction: roleReducer,
});

export default rootReducer;
