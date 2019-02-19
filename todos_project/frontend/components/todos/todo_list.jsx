import React from 'react';
import TodoForm from './todo_form';

const TodoListItem = ({ todo }) => (
    <ul>
        <h2> Todo # {todo.id}</h2>
        <li> Title: {todo.title}</li>
        <li> Body: {todo.body}</li>
        <li> Completed: {todo.done ? "True" : "False"}</li>
    </ul>
)

export default (props) => (
    <>
            {props.todos.map(todo => (  
                <TodoListItem key={todo.id} todo={todo} />
            ))
            }
        <TodoForm receiveTodo={props.receiveTodo}/>
    </>
)

