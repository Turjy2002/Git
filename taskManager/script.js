"use strict";

const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const dateInput = document.getElementById("dateInput");
const taskList = document.getElementById("taskList");
const tasks = []; //Array to hold tasks

const addTaskBtn = document.getElementById("addTaskBtn");
const completedBtn = document.getElementById("completedBtn");
const incompleteBtn = document.getElementById("incompleteBtn");
const allBtn = document.getElementById("allBtn");

// Prevent form submission
taskForm.addEventListener("submit", (e) => e.preventDefault());

const emptyPlaceHolder = document.getElementById("emptyPlaceHolder");
// initial state of placeholder
emptyPlaceHolder.style.display = "flex";

function saveTasks() {}
function getTasks() {}
function renderTasks() {}

function addTask() {
  if (taskInput.value == "") return alert("Task cannot be empty");
  // Hide placeholder when adding first task
  if (emptyPlaceHolder.style.display === "flex") {
    emptyPlaceHolder.style.display = "none";
  }
  const taskText = taskInput.value;
  const li = document.createElement("li");
  li.innerHTML = `${taskText} <button id="deleteBtn">X</button>`;
  taskList.appendChild(li);
  taskInput.value = "";
  // saveTasks();
}
addTaskBtn.addEventListener("click", addTask);

function deleteTask(e) {
  if (e.target.id === "deleteBtn") {
    if (confirm("Are you sure you want to delete this task?")) {
      e.target.parentElement.remove();
    } else {
      return;
    }

    // saveTasks();
    // Show placeholder when deleting last task
    if (
      emptyPlaceHolder.style.display === "none" &&
      taskList.children.length === 1
    ) {
      emptyPlaceHolder.style.display = "flex";
    }
  }
}
taskList.addEventListener("click", deleteTask);
