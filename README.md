No Google...maybe...
Only MATERIALS:
1. SBA: Task Management App
2. GitHub
3. Bootstrap
4. MND Web Docs
5. W3Schools 
6. YouTube***

I refreshed all of the files. 

I have 4:
1. index.html
2. script.js
3. style.css w/ background-color: blanchedalmond;
4. README.md - The Journal

The Reflections *included*
 Reflection: Write a short reflection (100-200 words) included within the repository discussing:

- Challenges faced during the project.
- How you approached solving those challenges.
- What you would improve if given more time.

[GitHub - URL]: {https://github.com/cfra8189/taskapp}

1. Linking the links:

    CSS:
    <link rel="stylesheet" href="./css/style.css">
   
    Bootstrap(CSS):
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">

    Bootstrap(JS):
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>

    JS:
    <script src="./js/script.js"></script>

2. Add HTML elements and ids:

I need:

- 4 Inputs - HTML Elements (taskname, category, deadline, status)
    - 1 Button (addNewTask)
    - 2 Dropdown (Status/Category filters)
    - 1 Calendar (Set Deadlines)

- 1 Display (Show the list of tasks // including options to update task status)

--------------------------------------------------------------------
==A==D==PONDERING==H==D==
Q: How to display the list of tasks?
A: THOUGHT:
- Add <ul> with some .textContent to display it on the page.

---I'M GOING TO TRY IT AFTER I FINISH ADDING THE ELEMENTS AND IDs---

Adding the elements and Ids:

Forget what I said about Google...I need a Calendar for the deadline and mark tasks as overdue.

I want to try coreui.io.
I guess it's like Bootstrap...

CoreUi - CSS Link:
<link href="https://cdn.jsdelivr.net/npm/@coreui/coreui@5.4.3/dist/css/coreui.min.css" rel="stylesheet" integrity="sha384-oMIIhJL1T5s+PxJr6+Qb0pO1IRFB6OGMM+J57UBT3UQKxSVsb++MkXpu9cLqaJxu" crossorigin="anonymous">

Core Ui - JS Link:
<script src="https://cdn.jsdelivr.net/npm/@coreui/coreui@5.4.3/dist/js/coreui.bundle.min.js" integrity="sha384-SWhFOmxmv1pfTLKVBW7q8uossvuaWNeQFdmaWi6xdldiUjyqG9F6V2R2BOC8gkxx" crossorigin="anonymous"></script>

***Commented Out Bootstrap***

Okay...It's not like Bootstrap...

Deleting it and going back to Bootstrap.

I asked Google..."How to set a deadline in JS"

---GOOGLE---
Executing Code at the Deadline:
You can use {setTimeout} to execute a function when the deadline is reached. Calculate the time difference between the current time and the deadline. 

Code Block:

const deadline = new Date("December 31, 2025 23:59:59");
const now = new Date();
const timeUntilDeadline = deadline.getTime() - now.getTime();

if (timeUntilDeadline > 0) {
    setTimeout(() => {
        console.log("Deadline reached!");
        
        // Perform actions when the deadline is met
    }, timeUntilDeadline);
} else {
    console.log("Deadline is already past.");
}

========================Test==Later============================

*********************Hold OFF On - DEADLINE INPUT******************

Back to the HTML IDs:

1. Input Field
2. Add New Task Button
3. Category Dropdown
4. Status Dropdown
5. Deadline (Placeholder)
6. Display Area

Now, Link the HTML elements to the JS file.

8888>LINKED<8888

const taskInput = document.getElementById("taskInput")
const addNewTask = document.getElementById("addNewTask")
const category = document.getElementById("category")
const status = document.getElementById("status")
// const deadline = document.getElementById("deadline")
const display = document.getElementById("display")

I need:
- Array for tasks[]
- Functions:
    - addNew()
    - removeLast()

***Added removeLast button to HTML***
<!-- REMOVE TASK BUTTON -->
<button id="removeLastTask"></button>

======TESTING on CHROME======
tasks
[]

addNew('apple')
script.js:15 apple added.
undefined

addNew('orange')
script.js:15 orange added.
undefined

addNew('grapes')
script.js:15 grapes added.
undefined

tasks
(3) ['apple', 'orange', 'grapes']
0
: 
"apple"
1
: 
"orange"
2
: 
"grapes"
length
: 
3
[[Prototype]]
: 
Array(0)

============================

They WORK!!!!

+++NEXT+++

- Use the taskInput - INPUT FIELD to addNewTask {taskInput.value}
- Add addEventListener to buttons:
    - addNewTask Button:
        
    addNewTask.addEventListener("click", ()=> {
    tasks.push(taskInput.value);
    console.log(`${taskInput.value} added.`)
    });
    
    - removeLastTask Button:
    
    removeLastTask.addEventListener("click", ()=> { 
    tasks.pop();
    console.log(`Item removed.`)
    });

***Cereal Break***

///Finding some Pure Tones to listen to while I work\\\

{YOUTUBE}
<The BEST Way to Master JavaScript DOM in 2025 | DOM Manipulation in JavaScript>
[https://www.youtube.com/watch?v=bI-yNnJDNcs&t=1277s]

***Cereal Break***

---ADDING [input.value = " ";] to the end of the button functions to clear the input
...Learned from the YouTube Video above...

Set Timer for 35 Minutes

Play Pure Tones
https://www.youtube.com/watch?v=cY7C1sF__wc - 
Power Focus - 14Hz Beta Waves to Unlock Focus and Elevate Concentration (Remaster)

I tried task.value = " ";
and it was wrong...it's actally inputTask.value and I switched them out.
They work!

- Add placeholder = "Enter Task" to the input element.

---QUICK CHECK---

I have:
- 'Enter Task' Input Field that holds the inputTask.value
-  2 Buttons - Add Task with addNewTask.addEventListener and Remove Last Task with removeLastTask.addEventListener
- 2 Dropdowns for Category and Status

***How to display the taskList?***
I know I need to:
- Create the element - [document.createElement('div')]
- I call it taskItem 
- Then add it (.appendChild(taskItem)) to display

const taskItem = document.createElement('div') INSTEAD OF THE <UL> I mentioned in the beginning...

taskItem.appendChild(taskItem)

I was wrong about the display.appendChild(taskItem);

It's actually... taskItem.textContent = task;
I was right about the .textContent...

I discovered that while I was creating the function showDisplay().

I added:
- display.innerHTML = " "; 
    - to reset the display, so it would make duplicates of the list.

- tasks.forEach(function (task));
    - to run the code for each taskItem

- const taskItem = document.createElement('div');
    - to give the taskItem.value to go

- taskItem.textContent = task;
    - to display textContent which would to user's task

- display.appendChild(taskItem);
    - to add the taskItem-div(child) to the display(parent)

function displayTasks(){
    display.innerHTML = " ";
    tasks.forEach(function (task) {
    const taskItem = document.createElement('div');
    taskItem.textContent = task;
    display.appendChild(taskItem);
})};

Now...I'll add the category options

I need to:
- Add IDs to the categories
- Link them to the JS file
***I have to GOOGLE: Setting Category to list items in JS***

Google says:
- I need to restructure my data by changing my tasks from holding an array to holding objects.
    - const tasks = {}

- Introduce a variable to store the currently selected category name.
    - let currentCategory = 'Personal';

and from here...

I need to:
- Find the Personal category
    - document.getElementById('personal');
- Add .addEventListner('click', ()=> {
    currentCategory = 'Personal';
})

- Then rinse and repeat for the Work and Shopping categories.


document.getElementById("personal").addEventListener('click', ()=>{
    currentCategory = "Personal";
})
document.getElementById("work").addEventListener('click', ()=>{
    currentCategory = "Work";
})
document.getElementById("shopping").addEventListener('click', ()=>{
    currentCategory = "Shopping";
})

===TESTING===

Nothing is workingggggg!!!!

I was wrong about changing:
const tasks = [] to const tasks {}

I'm turning it back to const tasks = []

I Googled:
- Creating an object in an array Javascript
- The example it gave:
    const cars = [
        { make: "Toyota", model: "Camry" },
        { make: "Ford", model: "F-150" }
    ]

So, I'm guessing, I need to have something like:

const tasks = [
    {task: "", category: "", status: ""}
]

Well...That didn't work...

I need to figure out how to add the task and category into the array....

I tried pushing currentCategory.
When I entered the task and selected the category, only the category was displayed.

Maybe I can try both taskInput.value and currentCategory...

OKAYYYY!!!! I SEE BOTH!!!!

Let me do the same thing for the Status category.

document.getElementById("notStarted").addEventListener('click', ()=>{
    currentCategory = ">Not Started";
})
document.getElementById("inProgress").addEventListener('click', ()=>{
    currentCategory = ">In Progress";
})
document.getElementById("completed").addEventListener('click', ()=>{
    currentCategory = "Completed";
})

OKAYYYYYYYYYYYY!!!! Now I see all three!!!


I think I need to see it in a table...

Looking at tables on Bootstrap to add to the display to see each section
Task | Category | Status

From Bootstrap - I like the way this one looks
<!-- On tables -->
<table class="table-dark">...</table>

<!-- On rows -->
<tr class="table-dark">...</tr>

<!-- On cells (`td` or `th`) -->
<tr>
  <td class="table-dark">...</td>
</tr>
---And other table elements like the thead and tbody

I added it to the HTML and nothing...

I need to 
- Add the table via the JS file 
- Create the table elements | table, row, cell, tbody
- Append it the display.

const table = document.createElement("table");

table.innerHTML = `
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

const row = document.createElement('tr'); 
const cell = document.createElement('td');
const tableBody = document.createElements('tbody');

It's not working!!!!!!

Asking Google how to create the object:
It should the example that we went over in class
.push({
    firstName: "Clarence",
    lastName: "Franklin",
    age: 36
})

SOOOOOO...It should be:
tasks.push({
    task: " ",
    category: " ",
    status: " "
})


----------------------------------------------------------------

Starting from scratch with Materialize....

Deleted the html and kept the css and js.

Pasted starter html code from Materialize.

Googled how to create an empty object to an array: 

let myArray = []; // Initialize an empty array

// Create an empty object with a property
let myObject = {
  propertyName: "someValue"
};

// Add the object to the array
myArray.push(myObject);

console.log(myArray);

=======================

const taskList = [];

let task = {
  task: "task",
  category: "category",
  status: "status"
}

Used Materialize textarea and js:

  <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <textarea id="textarea1" class="materialize-textarea"></textarea>
          <label for="textarea1">Textarea</label>
        </div>
      </div>
    </form>
  </div>

  $('#textarea1').val('New Text');
  M.textareaAutoResize($('#textarea1'));

  Made some changes:
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js" defer></script>

    Because the previous code wasn't working

    Added Materialize select and initialization:

---HTML---
    <div class="input-field col s12">
    <select>
      <option value="" disabled selected>Choose your option</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>
    <label>Materialize Select</label>
  </div>

---JS---
    document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
  });


  ----I just got lost, because things were not working----

  I have my input field and category selector.

  