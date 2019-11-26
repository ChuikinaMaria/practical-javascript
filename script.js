let todoList = {
  todos: [],
  createTodos: function(num) {
    for (let i = 0; i < num; i++) {
      this.addTodo(`item ${i}`);
    }
    view.displayTodos();
  },
  // displayTodos: function() {
  //   console.log("My todos:");
  //   if (this.todos.length === 0) {
  //     console.log("No todos to display");
  //   } else {
  //     this.todos.forEach(function ())
  //     for (let i = 0; i < this.todos.length; i++) {
  //       this.todos[i].completed
  //         ? console.log("[x]", this.todos[i].name)
  //         : console.log("[ ]", this.todos[i].name);
  //     }
  //   }
  // },
  addTodo: function(name) {
    this.todos.push({
      name: name,
      completed: false
    });
  },
  changeTodo: function(num, name) {
    this.todos[num].name = name;
  },
  deleteTodo: function(num) {
    this.todos.splice(num, 1);
  },
  completed: function(num) {
    let a = this.todos[num].completed;
    this.todos[num].completed = !a;
  },
  allCompleted: function() {
    let totalTodos = this.todos.length;
    let completedTodos = 0;
    this.todos.forEach(function(todo) {
      if (todo.completed === true) {
        completedTodos++;
      }
    });

    if (completedTodos === totalTodos) {
      this.todos.forEach(function(todo) {
        todo.completed = false;
      });
    } else {
      this.todos.forEach(function(todo) {
        todo.completed = true;
      });
    }
  }
};

let handlers = {
  displayTodos: function() {
    todoList.displayTodos();
  },
  allCompleted: function() {
    todoList.allCompleted();
    view.displayTodos();
  },
  addTodo: function() {
    let addTodoInput = document.getElementById("addTodoInput");
    todoList.addTodo(addTodoInput.value);
    addTodoInput.value = "";
    view.displayTodos();
  },
  createTodos: function() {
    let numOfTodos = document.getElementById("numOfTodos");
    todoList.createTodos(numOfTodos.valueAsNumber);
    numOfTodos.value = "";
    view.displayTodos();
  },
  changeTodo: function() {
    let changeTodoNum = document.getElementById("changeTodoNum");
    let changeTodoName = document.getElementById("changeTodoName");
    todoList.changeTodo(changeTodoNum.value, changeTodoName.value);
    changeTodoNum.value = "";
    changeTodoName.value = "";
    view.displayTodos();
  },
  deleteTodo: function(position) {
    todoList.deleteTodo(position);
    view.displayTodos();
  },
  completed: function() {
    let completeTodoNum = document.getElementById("completeTodoNum");
    todoList.completed(completeTodoNum.value);
    completeTodoNum.value = "";
    view.displayTodos();
  }
};

let view = {
  displayTodos: function() {
    let myTodos = document.getElementById("myTodos");
    myTodos.innerText = "My todos:";
    let noTodos = document.getElementById("noTodos");
    if (todoList.todos.length === 0) {
      noTodos.innerText = "No Todos";
    }
    let todosUl = document.querySelector("ul");
    todosUl.innerHTML = "";
    this;
    todoList.todos.forEach(function(todo, position) {
      let todoLi = document.createElement("li");
      if (todo.completed === true) {
        todoLi.innerText = `[x] ${todo.name}`;
      } else {
        todoLi.innerText = `[ ] ${todo.name}`;
      }
      todoLi.id = position;
      todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi);
    }, this);
  },
  createDeleteButton: function() {
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "delete";
    deleteButton.className = "deleteButton";
    return deleteButton;
  },
  setUpEventListeners: function() {
    let todosUl = document.querySelector("ul");
    todosUl.addEventListener("click", function(event) {
      let elementClicked = event.target;
      if (elementClicked.className === "deleteButton") {
        handlers.deleteTodo(parseInt(event.target.parentNode.id));
      }
    });
  }
};
view.setUpEventListeners();
