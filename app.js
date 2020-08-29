//Selectors
const todoInput = document.querySelector(".todo-input");
//console.log(todoInput.value);
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listeners

todoButton.addEventListener("click", addTodo);

todoList.addEventListener("click", deleteCheck);

//Functions

function addTodo(event) {
  //need to prevent the form from submitting
  event.preventDefault();
  //Todo Div

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //create li

  const newToDo = document.createElement("li");
  newToDo.innerText = todoInput.value;
  newToDo.classList.add("todo-item");
  todoDiv.appendChild(newToDo);

  //Checkmark/completed button

  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check" ></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  //delete button

  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash" ></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  //append to list
  todoList.appendChild(todoDiv);

  //clear todo inout value
  todoInput.value = "";
}

//DELETE
function deleteCheck(event) {
  const item = event.target;
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    //Animated delete
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  //checkmark
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
