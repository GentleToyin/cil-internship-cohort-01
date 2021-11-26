"use strict";
const searchBox = document.getElementById("input-search");
const getTodo = document.getElementById("todo-input");
const submitTodo = document.getElementById("submit-button");
const todoList = document.getElementById('list-of-todos');
const deleteAll = document.getElementById("delete-all");
const filterOption = document.getElementById("todo-filter");
submitTodo.addEventListener('click', addTodo);
todoList.addEventListener('click', favDoneDel);
searchBox.addEventListener('keyup', searchTodo);
deleteAll.addEventListener('click', deleteTodo);
filterOption.addEventListener('click', filterTodo);
function addTodo(e) {
    e.preventDefault();
    const todo = getTodo.value;
    const li = document.createElement('li');
    const div = document.createElement('div');
    const deleteBtn = document.createElement('button');
    deleteBtn.appendChild(document.createTextNode('Del'));
    deleteBtn.classList.add("delete");
    const completeBtn = document.createElement('button');
    completeBtn.appendChild(document.createTextNode('Done'));
    completeBtn.classList.add("done");
    const favBtn = document.createElement('button');
    favBtn.appendChild(document.createTextNode('IMPT'));
    favBtn.classList.add("favorite");
    div.appendChild(favBtn);
    div.appendChild(completeBtn);
    div.appendChild(deleteBtn);
    li.appendChild(document.createTextNode(todo));
    li.appendChild(div);
    li.className = 'todo-item';
    if (getTodo.value != "") {
        todoList.appendChild(li);
    }
    getTodo.value = "";
}
function favDoneDel(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Kindly Confirm Delete')) {
            const div = e.target.parentElement;
            const li = div.parentElement;
            todoList.removeChild(li);
        }
    }
    else if (e.target.classList.contains('done')) {
        const div = e.target.parentElement;
        const li = div.parentElement;
        li.classList.toggle("completed");
    }
    else if (e.target.classList.contains('favorite')) {
        const div = e.target.parentElement;
        const li = div.parentElement;
        li.classList.toggle("starred");
    }
}
function searchTodo(e) {
    const text = e.target.value.toLowerCase();
    const todos = todoList.getElementsByTagName('li');
    Array.from(todos).forEach(function (todo) {
        const itemName = todo.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            todo.style.display = "block";
        }
        else {
            todo.style.display = 'none';
        }
    });
}
function deleteTodo(e) {
    if (confirm('THIS WILL DELETE ALL!!!')) {
        todoList.remove();
    }
}
function filterTodo(event) {
    let todos = todoList.querySelectorAll('li');
    todos: [] = Array.from(todos);
    todos.forEach(function (todo) {
        switch (event.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                }
                else {
                    todo.style.display = "none";
                }
                break;
            case "favorite":
                if (todo.classList.contains("starred")) {
                    todo.style.display = "flex";
                }
                else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                }
                else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}
