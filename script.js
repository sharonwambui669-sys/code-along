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
