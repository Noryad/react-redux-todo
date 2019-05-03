import React from 'react';
import {connect} from 'react-redux';

import { withStyles } from '@material-ui/core/styles';

import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import {addTodo, toggleTodo, removeTodo} from '../actionCreators';

const styles = () => ({
    content: {
        maxWidth: '1230px',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center'
    }
});

const Content = ({todos, handleAddTodo, toggleTodo, removeTodo, classes}) => {
    return (
        <div className={classes.content}>
            <h1>Todo List</h1>
            <AddTodo addTodo={handleAddTodo} />
            <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    };
};

const mapDispatchToProps = dispatch => {
    return {
        removeTodo(index) {
            dispatch(removeTodo(index));
        },
        toggleTodo(index) {
            dispatch(toggleTodo(index))
        },
        handleAddTodo(e) {
            e.preventDefault();
            let todo = {
                name: e.target.name.value,
                createdAt: new Date().toLocaleDateString("es-Es"),
                status: false
            };
            dispatch(addTodo(todo));
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Content));

