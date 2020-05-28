import { ADD_COUNT, SUBSTRACT_COUNT} from "../actions/ActionType";

const initState = 0

const countReducer = (state = initState, action) => {
    switch (action.type) {

        case ADD_COUNT:   
        return state + 1;

        case SUBSTRACT_COUNT:
        return state - 1;
        
        default :
        return state;
    }}
export default countReducer;