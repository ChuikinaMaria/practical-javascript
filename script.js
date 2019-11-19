let todoList = {
    todos: ['item 1', 'item 2', 'item 3'],
    displayTodos: function() {console.log(this.todos)},
    addTodos: function(newTodos) {this.todos.push(newTodos);
    this.displayTodos()},
    changeTodos: function(num, name) {
        this.todos[num] = name;
        this.displayTodos()},
    deleteTodos: function(num){
        delete this.todos[num];
        this.displayTodos();
    }


}