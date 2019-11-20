let todoList = {
    todos: [],
    displayTodos: function() {
        console.log('My todos:');
        if (this.todos.length === 0) {console.log('No todos to display');
    } else {
    for (let i=0; i<this.todos.length; i++){        
        let a = (this.todos[i].completed)? '[x]': '[ ]'; 
        console.log(a, this.todos[i].name);
    }
}
},
    addTodo: function(name){
        this.todos.push({
            name: name,
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