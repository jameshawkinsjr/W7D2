import * as APIUtil from '../util/todo_api_utils'

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';

export const receiveTodos = todos => ({
    type: RECEIVE_TODOS,
    todos
});

export const receiveTodo = todo => ({
    type: RECEIVE_TODO,
    todo
});

export const fetchTodos = () => dispatch => (
    APIUtil.fetchTodos()
    .then( todos => dispatch(receiveTodos(todos)))
)

export const createTodo = ( todo ) => (dispatch) => (
    APIUtil.createTodo( todo )
    .then( todo => dispatch(receiveTodo(todo)))
)