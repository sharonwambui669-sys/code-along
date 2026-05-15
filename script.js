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
