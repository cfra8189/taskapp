const taskInput = document.getElementById("taskInput");
const addNewTask = document.getElementById("addNewTask");
const removeLastTask = document.getElementById("removeLastTask");
const category = document.getElementById("category");
const status = document.getElementById("status");
// const deadline = document.getElementById("deadline");
const display = document.getElementById("display");

const tasks = [];

// ------FUNCTIONS------

function addNew(item) {
  tasks.push(item);
  console.log(`${item} added.`);
}

function removeLast() {
  tasks.pop();
  console.log(`${item} removed.`);
}

addNewTask.addEventListener("click", () => {
  tasks.push({
    task: " ",
    category: " ",
    status: " "
});
  displayTasks();
  console.log(`${taskInput.value} added.`);
  taskInput.value = "";
});

removeLastTask.addEventListener("click", () => {
  tasks.pop();
  displayTasks();
  console.log(`Item removed.`);
  taskInput.value = "";
});

function displayTasks() {
  display.innerHTML = " ";
//   const table = document.createElement("table");

  let tableHTML = `
<table class="table-dark">
            <thead>
                <tr class="table-dark"></tr>
                <th>Task</th>
                <th>Category</th>
                <th>Status</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
`;
  const tableBody = table.querySelector("tbody");

  tasks.forEach(function (task) {
    const taskItem = document.createElement("div");
    const row = document.createElement("tr");
    taskItem.textContent = task;
    display.appendChild(taskItem);

    const cell = document.createElement('td');
    taskCell.textContent = task.task;
    row.appendChild(cell);
  });

  display.appendChild(table);

}

let currentCategory = "Personal";

document.getElementById("personal").addEventListener("click", () => {
  currentCategory = "Personal";
});
document.getElementById("work").addEventListener("click", () => {
  currentCategory = "Work";
});
document.getElementById("shopping").addEventListener("click", () => {
  currentCategory = "Shopping";
});

let currentStatus = "Not Started";

document.getElementById("notStarted").addEventListener("click", () => {
  currentCategory = "Not Started";
});
document.getElementById("inProgress").addEventListener("click", () => {
  currentCategory = "In Progress";
});
document.getElementById("completed").addEventListener("click", () => {
  currentCategory = "Completed";
});
