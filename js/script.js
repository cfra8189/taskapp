const taskInput = document.getElementById("taskInput");
const addNewTask = document.getElementById("addNewTask");
const removeLastTask = document.getElementById("removeLastTask");

const displayList = document.getElementById("displayList");
const categorySelect = document.getElementById("categorySelect");
const statusSelect = document.getElementById("statusSelect");
const dueDateInput = document.getElementById("dueDateInput");

document.addEventListener("DOMContentLoaded", function () {
  let selectElems = document.querySelectorAll("select");
  M.FormSelect.init(selectElems, {});

  let datepickerElems = document.querySelectorAll(".datepicker");
  const datepickerOptions = {
    autoClose: true,
    format: "mmm dd, yyyy",
  };
  M.Datepicker.init(datepickerElems, datepickerOptions);
});

addNewTask.addEventListener("click", function () {
  let newTaskText = taskInput.value.trim();
  const selectedCategory = categorySelect.value;
  const selectedStatus = statusSelect.value;
  const selectedDueDateString = dueDateInput.value;

  if (
    newTaskText === "" ||
    selectedCategory === "" ||
    selectedStatus === "" ||
    selectedDueDateString === ""
  ) {
    alert("Please fill all fields.");
    return;
  }

  const dueDate = new Date(selectedDueDateString);
  const today = new Date();

  dueDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  let dueStatusText = `Due: ${selectedDueDateString}`;
  let dueStatusClass = "due-text";

  if (today > dueDate) {
    dueStatusText = "OVERDUE";
    dueStatusClass += " overdue";
  }

  const listItem = document.createElement("li");
  listItem.classList.add("collection-item", "task-item");

  listItem.innerHTML = `
    <div>
        ${newTaskText} 
        
        <span class="category-text" style="font-weight: bold;">[${selectedCategory}]</span> 
        
        <span class="status-text" style="font-weight: bold;">(${selectedStatus})</span>
        
        <span class="${dueStatusClass}">${dueStatusText}</span>
        
        <i class="material-icons secondary-content complete-btn">check</i> 
    </div>
`;
  displayList.appendChild(listItem);

  taskInput.value = "";
  dueDateInput.value = "";
  categorySelect.value = "";
  statusSelect.value = "";
  M.FormSelect.init(categorySelect);
  M.FormSelect.init(statusSelect);
});

removeLastTask.addEventListener("click", () => {
  const lastItem = displayList.lastElementChild;
  if (lastItem) {
    displayList.removeChild(lastItem);
  }
});

displayList.addEventListener("click", (e) => {
  if (e.target.classList.contains("complete-btn")) {
    const taskItem = e.target.closest(".task-item");
    taskItem.classList.toggle("completed");
    const statusSpan = taskItem.querySelector(".status-text");
    const dueSpan = taskItem.querySelector(".due-text");

    if (taskItem.classList.contains("completed")) {
      statusSpan.textContent = "(Completed)";
      e.target.style.display = "none";
      dueSpan.textContent = "Completed!";
      dueSpan.classList.remove("overdue", "due-today");
      dueSpan.classList.add("completed-due");
    } else {
      statusSpan.textContent = "(Not Started)";
      e.target.style.display = "";
      dueSpan.classList.remove("completed-due");
    }
  }
});
