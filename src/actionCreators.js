const addTodo = todo => {
    return {
        type: "ADD_TODO",
        todo
    };
};

const toggleTodo = index => {
    return {
        type: "TOGGLE_TODO",
        index: index
    };
};

const removeTodo = index => {
    return {
        type: "REMOVE_TODO",
        index: index
    };
};

export { addTodo, toggleTodo, removeTodo };