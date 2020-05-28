import React from 'react';
import {connect} from 'react-redux';
import {delTodo, comTodo} from '../redux/actions/AddTodoAction'

const TodoList = (props) => {
    
const {todos, delTodo, comTodo } = props

const list = todos.length ? (
                 todos.map(todo => {
                     return(
                     <div key={todo.id}>
                     <h3 style={{textDecoration: todo.completed ? "line-through" : null, color: todo.completed ? "grey" : null}} onClick={() => comTodo(todo)} >{todo.text}</h3>
                     <button onClick={() => delTodo(todo.id)} >Delete</button>
                     </div>
                 )})) 
                 : (<p>You don't have any todolist yet</p>)

    return(
        <>
        {list}        
        </>
    )
}

const mapStateToProps = (state) => {
    return{
    todos : state.AddTodoReducer
}}
    
const mapDispatchToProps = (dispatch) => {
    return {
    delTodo: (id) => dispatch(delTodo(id)),
    comTodo: (todo) => dispatch(comTodo(todo))
}}
  
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);