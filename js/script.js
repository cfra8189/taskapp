const taskInput = document.getElementById("taskInput");
const addNewTask = document.getElementById("addNewTask");
const removeLastTask = document.getElementById("removeLastTask");
const category = document.getElementById("category");
const status = document.getElementById("status");
// const deadline = document.getElementById("deadline");
const display = document.getElementById("display");

const tasks = [];

// ------FUNCTIONS------

function addNew(item){
    tasks.push(item);
    console.log(`${item} added.`)
}

function removeLast(){
    tasks.pop();
    console.log(`${item} removed.`)
}


addNewTask.addEventListener("click", ()=> {
    tasks.push(taskInput.value);
    console.log(`${taskInput.value} added.`)
    input.value = " ";
});

removeLastTask.addEventListener("click", ()=> { 
    tasks.pop();
    console.log(`Item removed.`)
    input.value = " ";
});