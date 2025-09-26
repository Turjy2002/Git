"use strict";

const taskInput = document.getElementById("taskInput");
const dateInput = document.getElementById("dateInput");
const taskList = document.getElementById("taskList");
const emptyPlaceHolder = document.getElementById("emptyPlaceHolder");

const addTaskBtn = document.getElementById("addTaskBtn");
const completedBtn = document.getElementById("completedBtn");
const incompleteBtn = document.getElementById("incompleteBtn");
const allBtn = document.getElementById("allBtn");

function saveTasks() {}
function getTasks() {}

function addTask() {
  if (taskInput.value == "") return alert("Task cannot be empty");
  if (emptyPlaceHolder) emptyPlaceHolder.remove();
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
    e.target.parentElement.remove();
    if (taskList.children.length === 0) {
      const li = document.createElement("li");
      li.id = "emptyPlaceHolder";
      li.innerText = "No Tasks Available...";
      taskList.appendChild(li);
    }
  }
}
taskList.addEventListener("click", deleteTask);
