const searchBox = document.getElementById("input-search");
const getTodo = <HTMLInputElement>document.getElementById("todo-input");
const submitTodo = document.getElementById("submit-button");
const todoList = document.getElementById('list-of-todos');
const deleteAll = document.getElementById("delete-all");
const filterOption = document.getElementById("todo-filter");


//Adds event listeners
submitTodo!.addEventListener('click', addTodo)
todoList!.addEventListener('click', favDoneDel)                  // the exclamation is to tell typescript that this cant be null
searchBox!.addEventListener('keyup', searchTodo)
deleteAll!.addEventListener('click', deleteTodo)
filterOption!.addEventListener('click', filterTodo);

// Add Todo
function addTodo(e: Event) {
    e.preventDefault()                                        //Prevents page from refreshing when you submit
    const todo = getTodo.value                                 // sets input text to todo



    const li: HTMLLIElement = document.createElement('li')
    const div: HTMLDivElement = document.createElement('div')

    // creates all necessary buttons with their text and class
    const deleteBtn: HTMLButtonElement = document.createElement('button')
    deleteBtn.appendChild(document.createTextNode('Del'))
    deleteBtn.classList.add("delete")

    const completeBtn: HTMLButtonElement = document.createElement('button')
    completeBtn.appendChild(document.createTextNode('Done'))
    completeBtn.classList.add("done")

    const favBtn: HTMLButtonElement = document.createElement('button')
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
        todoList!.appendChild(li) // appends the li to the todoList from html
    }
    getTodo.value = ""
}

//Adds to Favorite, Deletes or mark has Done
function favDoneDel(e: Event) {
    if ((<HTMLElement>e.target).classList.contains('delete')) {
        if (confirm('Kindly Confirm Delete')) {     // 
            const div = (<HTMLElement>e.target).parentElement;     // Due to the way the li is set up, it needs to get out of the div the li
            const li = (<HTMLElement>div).parentElement;

            todoList!.removeChild(li!);
        }                                           // THE REMAING CONDITIONS FOLLOW THIS RULE
    }

    else if ((<HTMLElement>e.target).classList.contains('done')) {
        const div = (<HTMLElement>e.target).parentElement;
        const li = (<HTMLElement>div).parentElement;
        li!.classList.toggle("completed")
    }

    else if ((<HTMLElement>e.target).classList.contains('favorite')) {
        const div = (<HTMLElement>e.target).parentElement;
        const li = (<HTMLElement>div).parentElement;
        li!.classList.toggle("starred")
    }
}

// Adds functonality to the search box
function searchTodo(e: Event) {
    const text = (<HTMLTextAreaElement>e.target).value.toLowerCase();               // sets the input to lowercase
    const todos = todoList!.getElementsByTagName('li');      // gets all the lists
    Array.from(todos).forEach(function (todo) {
        const itemName = todo.firstChild!.textContent;
        if (itemName!.toLowerCase().indexOf(text) != -1) {   // Sets display to only elements in the search box
            todo.style.display = "block"
        } else {
            todo.style.display = 'none'
        }
    })

}


//Delete All
function deleteTodo(e: Event) {
    if (confirm('THIS WILL DELETE ALL!!!')) {
        todoList!.remove()
    }

}



// Filter
function filterTodo(event: Event) {
    let todos = todoList!.querySelectorAll('li');
    todos: [] = Array.from(todos)                                   // Converts to array so forEach can be applied
    todos.forEach(function (todo) {
        switch ((<HTMLTextAreaElement>event.target).value) {
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

