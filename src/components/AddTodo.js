import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import {connect} from 'react-redux';
import {addTodo} from '../redux/actions/AddTodoAction'

const AddTodo = (props) =>  {
    
    const [todos, setTodos] = useState({
        id: null,
        text: ''
    })

    const handleChange = (e) => {
    setTodos({
        id: uuidv4(),
        text: e.target.value
    })}
    
    const handleSubmit = (e) => {   
    e.preventDefault();
    props.addTodo(todos);
    setTodos({
        id: null,
        text: ''
    })
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="todo" id="text" value={todos.text} placeholder="adhf" onChange={handleChange} required />
            <input type="button" value="Submit"  />
        </form>
    )
}
  
const mapDispatchToProps = (dispatch) => {
    return {
    addTodo: (todos) => dispatch(addTodo(todos))
    }}

export default connect(null, mapDispatchToProps)(AddTodo);