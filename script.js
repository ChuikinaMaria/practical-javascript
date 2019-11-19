let todoList = {
    todos: [],
    displayTodos: function() {console.log(this.todos)},
    addTodo: function(name){
        this.todos.push({
            name: 'newTodos',
            completed: false});
        this.displayTodos()},
    changeTodo: function(num, name) {
        this.todos[num].newTodos = name;
        this.displayTodos()},
    deleteTodo: function(num){
        this.todos.splice(num, 1);
        this.displayTodos();},
    completed: function(num){
        let a = this.todos[num].completed
        this.todos[num].completed = !a;
        this.displayTodos();
    }



}