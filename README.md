No Google...
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

======TESTING on CHROME======


============================