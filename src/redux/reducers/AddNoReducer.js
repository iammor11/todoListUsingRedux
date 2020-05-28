import { ADD_NO } from "../actions/ActionType";

const initState = 0

const AddNoReducer = (state = initState, action) => {
    switch (action.type) {

        case ADD_NO:   
        return state + 1;

        default :
        return state;
    }}
export default AddNoReducer;