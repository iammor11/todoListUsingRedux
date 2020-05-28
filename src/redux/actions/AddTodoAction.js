import { ADD_TODO, DEL_TODO, COM_TODO } from './ActionType'

export const addTodo = todos => ({
    type: ADD_TODO,
    payload: { todos }
    });

export const delTodo = id => ({
    type: DEL_TODO,
    payload: { id }
    });

export const comTodo = todo => ({
    type: COM_TODO,
    payload: { todo }
    });