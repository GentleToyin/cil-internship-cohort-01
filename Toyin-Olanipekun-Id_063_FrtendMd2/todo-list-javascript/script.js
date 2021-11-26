const searchBox = document.getElementById("input-search");
const getTodo = document.getElementById("todo-input");
const submitTodo = document.getElementById("submit-button");
const todoList = document.getElementById('list-of-todos');
const deleteAll = document.getElementById("delete-all");
const filterOption = document.getElementById("todo-filter");


//Adds event listeners to the appropriate field and buttons
submitTodo.addEventListener('click', addTodo)
todoList.addEventListener('click', favDoneDel)
searchBox.addEventListener('keyup', searchTodo)
deleteAll.addEventListener('click', deleteTodo)
filterOption.addEventListener('click', filterTodo);

// Add Todo
function addTodo(e) {
    e.preventDefault()                                        //Prevents page from refreshing when you submit
    const todo = getTodo.value                                 // sets input text to todo

    //creates the li element and the div to house the three buttons. The div is necessary for styling the buttons

    const li = document.createElement('li')
    const div = document.createElement('div')

    // creates all necessary buttons with their text and class
    const deleteBtn = document.createElement('button')
    deleteBtn.appendChild(document.createTextNode('Del'))
    deleteBtn.classList.add("delete")

    const completeBtn = document.createElement('button')
    completeBtn.appendChild(document.createTextNode('Done'))
    completeBtn.classList.add("done")

    const favBtn = document.createElement('button')
    favBtn.appendChild(document.createTextNode('IMPT'))
    favBtn.classList.add("favorite")

    //appends the buttons to the div created above
    div.appendChild(favBtn)
    div.appendChild(completeBtn)
    div.appendChild(deleteBtn)
    //appends the input text to the li created above
    li.appendChild(document.createTextNode(todo))
    //appends div with the buttons to li
    li.appendChild(div)
    //adds class to the li. the class is same with the html li
    li.className = 'todo-item'

    if (getTodo.value != "") {
        todoList.appendChild(li) // appends the li to the todoList from html
    }
    getTodo.value = ""
}

//Adds to Favorite, Deletes or mark has Done
function favDoneDel(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Kindly Confirm Delete')) {
            const div = e.target.parentElement;     // Due to the way the li is set up, it needs to get out of the div the li
            const li = div.parentElement;

            todoList.removeChild(li);
        }
    }

    else if (e.target.classList.contains('done')) {
        const div = e.target.parentElement;
        const li = div.parentElement;
        li.classList.toggle("completed")
    }

    else if (e.target.classList.contains('favorite')) {
        const div = e.target.parentElement;
        const li = div.parentElement;
        li.classList.toggle("starred")
    }
}

// Adds functonality to the search box
function searchTodo(e) {
    const text = e.target.value.toLowerCase();
    const todos = todoList.getElementsByTagName('li');      // gets all the lists
    Array.from(todos).forEach(function (todo) {
        const itemName = todo.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            todo.style.display = "block"
        } else {
            todo.style.display = 'none'
        }
    })

}


//Delete All
function deleteTodo(e) {
    if (confirm('THIS WILL DELETE ALL!!!')) {
        todoList.remove()
    }

}



// Filter
function filterTodo(event) {
    let todos = todoList.getElementsByTagName('li');
    todos = Array.from(todos)                                   // Converts to array so forEach can be applied
    todos.forEach(function (todo) {
        switch (event.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none"
                }
                break;

            case "favorite":
                if (todo.classList.contains("starred")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none"
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none"
                }
                break;
        }
    })

}

