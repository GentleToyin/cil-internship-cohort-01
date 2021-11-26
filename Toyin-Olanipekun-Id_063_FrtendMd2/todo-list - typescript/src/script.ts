const searchBox = document.getElementById("input-search");      //get search box
const getTodo = <HTMLInputElement>document.getElementById("todo-input");          //get todo input from user
const submitTodo = document.getElementById("submit-button");    // get submit button
const todoList = document.getElementById('list-of-todos');      // get the list of todos
const deleteAll = document.getElementById("delete-all");        // get delete button
const filterOption = document.getElementById("todo-filter");    // get todo filter



submitTodo!.addEventListener('click', addTodo)                   //adds event listeners to the appropriate field and buttons
todoList!.addEventListener('click', favDoneDel)                  // the exclamation is to tell typescript that this cant be null
searchBox!.addEventListener('keyup', searchTodo)
deleteAll!.addEventListener('click', deleteTodo)
filterOption!.addEventListener('click', filterTodo);

// Add Todo
function addTodo(e: Event) {
    e.preventDefault()                                        //Prevents page from refreshing when you submit
    const todo = getTodo.value                                 // sets input text to todo

    //creates the li element and the div to house the three buttons. The div is necessary for styling the buttons

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
    // this is to avoid submitting empty list with just buttons
    if (getTodo.value != "") {
        todoList!.appendChild(li) // appends the li to the todoList from html
    }
    getTodo.value = ""           // sets inputfield to clear after submitting
}

//Adds to Favorite, Deletes or mark has Done
function favDoneDel(e: Event) {
    if ((<HTMLElement>e.target).classList.contains('delete')) {    //checks to see it the button clicked has class delete
        if (confirm('Kindly Confirm Delete')) {     // This is just to confirm if you truly want to delete
            const div = (<HTMLElement>e.target).parentElement;     // Due to the way the li is set up, it needs to get out of the div the li
            const li = (<HTMLElement>div).parentElement;

            todoList!.removeChild(li!);               // This removes the li
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
    Array.from(todos!).forEach(function (todo) {             // converts to array so array methods can be used
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
    let todos = todoList!.querySelectorAll('li');            //Gets all the li
    todos: [] = Array.from(todos)                                   // Converts to array so forEach can be applied
    todos.forEach(function (todo) {                             //switch through each elements to check if they contain the appropriate class
        switch ((<HTMLTextAreaElement>event.target).value) {                           // and displays accordingly
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

