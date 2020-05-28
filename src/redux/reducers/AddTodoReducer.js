import { ADD_TODO, DEL_TODO, COM_TODO} from "../actions/ActionType";

const initState = []

const AddTodoReducer = (state = initState, action) => {

  switch (action.type) {
    
    case ADD_TODO:  
    const {id, text} = action.payload.todos;
    return  [...state, 
    {
      id,
      text,
      completed: false
    }]

    case DEL_TODO:
    const newState = state.filter(todo => {
    return (
    todo.id !== action.payload.id
    )})
    return newState ;
      
    case COM_TODO:
    action.payload.todo.completed = !state.completed
    const updState = [...state]
    return updState ;
    
    default :
    return state;
    }}
export default AddTodoReducer;