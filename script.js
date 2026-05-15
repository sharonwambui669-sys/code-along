// ===============================
// TO-DO LIST APPLICATION
// ===============================

// Constructor Function

function Task(taskName, taskDate) {

  this.taskName = taskName;
  this.taskDate = taskDate;
  this.completed = false;

}

// Prototype Method

Task.prototype.markCompleted = function () {

  this.completed = true;

};



// Array for Storing Tasks

let tasks = [];

// Selecting HTML Elements

const taskForm = document.getElementById("taskForm");

const taskList = document.getElementById("taskList");

// ===============================
// ADD TASK FUNCTIONALITY
// ===============================

// Selecting HTML Elements

const taskForm = document.getElementById("taskForm");

const taskList = document.getElementById("taskList");

// ===============================
// ADD TASK FUNCTIONALITY
// ===============================

taskForm.addEventListener("submit", function(event) {

  // Prevent Page Refresh

  event.preventDefault();

  // Get User Input

  const taskName = document.getElementById("taskName").value;

  const taskDate = document.getElementById("taskDate").value;
    // Validation

  if(taskName === "") {

    alert("Please enter a task name.");

    return;

  }
// Create New Task Object

  const newTask = new Task(taskName, taskDate);

  // Add Task to Array

  tasks.push(newTask);

  // Display Updated Tasks

  displayTasks();

  // Clear Form Inputs

  taskForm.reset();

});

// ===============================
// DISPLAY TASKS
// ===============================

function displayTasks() {

  // Clear Existing Tasks

  taskList.innerHTML = "";

  // Loop Through Tasks

  tasks.forEach(function(task, index) {

    // Create List Item

    const li = document.createElement("li");

    li.classList.add("task-item");

    // Add Completed Class

    if(task.completed) {

      li.classList.add("completed");

    }

    // Add Task Content

    li.innerHTML = `

      <div class="task-details">

        <h3>${task.taskName}</h3>

        <p>Due Date: ${task.taskDate || "No date added"}</p>

      </div>

      <div class="task-buttons">

        <button onclick="completeTask(${index})">

          ${task.completed ? "Completed" : "Complete"}

        </button>

        <button onclick="deleteTask(${index})">

          Delete

        </button>

      </div>

    `;

    // Add Task to HTML List

    taskList.appendChild(li);

  });

}

// ===============================
// COMPLETE TASK
// ===============================

function completeTask(index) {

  // Mark Task as Completed

  tasks[index].markCompleted();

  // Refresh Display

  displayTasks();

}

// ===============================
// DELETE TASK
// ===============================

function deleteTask(index) {

  // Remove Task from Array

  tasks.splice(index, 1);

  // Refresh Display

  displayTasks();

}

