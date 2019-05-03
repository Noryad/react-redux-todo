import {createStore} from 'redux';

const reducer = (state, action) => {
    if (action.type === 'ADD_TODO') {
        return {
            ...state,
            todos: state.todos.concat(action.todo)
        };
    } else if (action.type === 'REMOVE_TODO') {
        return {
            ...state,
            todos: state.todos.filter((todo, i) => i !== action.index)
        };
    }
    else if (action.type === 'TOGGLE_TODO') {
        return {
            ...state,
            todos: state.todos.map((todo, i) => {
                if (i === action.index) {
                    todo.status = !todo.status;
                }
                return todo;
            })
        };
    }
    return state;
};

export default createStore(reducer, { todos: [] });