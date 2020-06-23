interface Todo {
    title: string;
    text: string;
}

const showTodo = (todo: Todo) => {
    console.log(todo.title + ': ' + todo.text);
}