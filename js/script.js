const taskInput = document.getElementById("taskInput");
const addNewTask = document.getElementById("addNewTask");
const removeLastTask = document.getElementById("removeLastTask");
const category = document.getElementById("category");
const status = document.getElementById("status");
// const deadline = document.getElementById("deadline");
const display = document.getElementById("display");


const taskList = [];

let task = {
  task: "task",
  category: "category",
  status: "status"
}

//Materialize
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {});
  });


// FUNCTION

function newTask() {
let newTask = taskInput.value;
task.task = newTask
}