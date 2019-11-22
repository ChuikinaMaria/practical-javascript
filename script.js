let todoList = {
    todos: [],
    createTodos: function(num) {
        for (let i=0; i<num; i++) {
            this.todos.push({
                name: `item ${i}`,
                completed: false});;
        }    
     this.displayTodos();
    },
    displayTodos: function() {
        console.log('My todos:');
        if (this.todos.length === 0) {console.log('No todos to display');
    } else {
    for (let i=0; i<this.todos.length; i++){        
        (this.todos[i].completed)? console.log('[x]', this.todos[i].name): console.log('[ ]', this.todos[i].name); 
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
        this.displayTodos()},
    allCompleted: function() {
        let totalTodos = this.todos.length;
        let completedTodos = 0;
        for (let i=0; i<totalTodos; i++) {
            if (this.todos[i].completed === true) {
                completedTodos=completedTodos + 1;
            };
        }
        if (completedTodos === totalTodos) {
            for (let i=0; i<totalTodos; i++) {
                this.todos[i].completed = false;
            }
        } else {
            for (let i=0; i<totalTodos; i++) {
                this.todos[i].completed = true;               
        }
    }
            this.displayTodos();
    }
};
let displayTodosButton = document.getElementById('displayTodosButton');
displayTodosButton.addEventListener('click', function(){
    todoList.displayTodos();
});
let toggleAllButton = document.getElementById('toggleAllButton');
toggleAllButton.addEventListener('click', function(){
    todoList.allCompleted();
});