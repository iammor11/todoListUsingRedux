import { combineReducers } from "redux";
import countReducer from './countReducer';
import AddTodoReducer from './AddTodoReducer';
import AddNoReducer from './AddNoReducer';

const rootReducer = combineReducers({
    countReducer: countReducer,
    AddTodoReducer: AddTodoReducer,
    AddNoReducer: AddNoReducer
    });

export default rootReducer;