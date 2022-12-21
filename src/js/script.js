"use strict";
// exports.__esModule = true;
var input;
input = document.getElementById('input');
var addButton;
addButton = document.getElementById('add-btn');
var clearAllButton;
clearAllButton = document.getElementById('clear-all-btn');
var todoList;
todoList = document.getElementById('todo-list');
var tasks = [];
// Add Task
addButton.addEventListener('click', function () {
    var task = {
        id: Math.floor(Math.random() * 1000),
        value: input.value
    };
    if (task.value === '') {
        input.focus();
    }
    else {
        tasks.push(task);
        var newTask;
        newTask = document.createElement('li');
        tasks.map(function (task) {
            newTask.id = 'task';
            newTask.innerHTML = task.value;
            newTask.innerHTML += '<i onclick = "removeTask(this)" class="bi bi-x"></i>';
            todoList.appendChild(newTask);
        });
        input.value = '';
    }
});
// Remove Task
function removeTask(e) {
    e.parentElement.remove();
}
;
// Delete All Tasks
clearAllButton.addEventListener('click', function () {
    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
    }
    tasks.length = 0;
});
// Add Task With Event Keypress
input.addEventListener('keypress', function (Event) {
    if (Event.which === 13) {
        var task = {
            id: Math.floor(Math.random() * 1000),
            value: input.value
        };
        if (task.value === '') {
            input.focus();
        }
        else {
            tasks.push(task);
            var newTask;
            newTask = document.createElement('li');
            tasks.map(function (task) {
                newTask.id = 'task';
                newTask.innerHTML = task.value;
                newTask.innerHTML += '<i onclick = "removeTask(this)" class="bi bi-x"></i>';
                todoList.appendChild(newTask);
            });
            input.value = '';
        }
    }
});
