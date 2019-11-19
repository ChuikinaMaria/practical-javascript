let todoList = {
    todos: ['item 1', 'item 2', 'item 3'],
    displayTodos: function() {console.log(this.todos)},
    addTodo: function(newTodos){
        this.todos.push(newTodos);
        this.displayTodos()},
    changeTodo: function(num, name) {
        this.todos[num] = name;
        this.displayTodos()},
    deleteTodo: function(num){
        this.todos.splice(num, 1);
        this.displayTodos();},



}