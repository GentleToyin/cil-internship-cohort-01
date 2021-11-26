const getBtn = document.getElementById('get')           //Gets button from the HTML
const postBtn = document.getElementById('post')
const putBtn = document.getElementById('put')





getBtn.addEventListener('click', getTodo)              //Adds event listeners to button
postBtn.addEventListener('click', postTodo)
putBtn.addEventListener('click', putTodo)


function getTodo() {
    fetch('https://jsonplaceholder.typicode.com/todos')   //Gets data from API, lets todo to 10
        .then(res => {
            return res.json();
        })
        .then(datas => {
            let output = ""
            datas.forEach(todo => {
                if (todo.completed == true) {                       //checks if each element of todo is completed, to apply appropriate CSS
                    output += `<ul style=" background-color: #318298; color:white; opacity: 0.5;">   
                <li>ID: ${todo.id}</li>    
                <li>Title: ${todo.title}</li> 
                <li>Completed: ${todo.completed}</li>
                </ul>`
                } else {
                    output += `<ul style=" background-color: #318298; color:white;">
                 <li>ID: ${todo.id}</li>    
                 <li>Title: ${todo.title}</li> 
                 <li> Completed: ${todo.completed}</li>
                </ul>`
                }
            })
            document.querySelector("#output-area").innerHTML = output
        })
        .catch(err => {
            console.log(err)
        })
}


function postTodo(e) {
    e.preventDefault();
    let id = document.getElementById('id-input').value
    let title = document.getElementById('title-input').value
    let Initialcompleted = document.getElementById('todo-status').value
    let completed = Initialcompleted.toLowerCase()
    fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, "/"',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ id: id, title: title, completed: completed })
    })
        .then((res) => res.json())
        .then((todo) => {
            if (todo.completed == 'true') {
                let output = `<ul style=" background-color: #318298; color:white; opacity: 0.5;">
                <h2>This Todo was added</h2>
                <li>ID: ${todo.id}</li>    
                <li>Title: ${todo.title}</li> 
                <li>Completed: ${todo.completed}</li>
                </ul>`
                document.querySelector("#output-area").innerHTML = output
            }

            else {
                let output = `<ul style=" background-color: #318298; color:white;">
                <h2>This Todo was added</h2>
                <li>ID: ${todo.id}</li>    
                <li>Title: ${todo.title}</li> 
                <li>Completed: ${todo.completed}</li>
                </ul>`
                document.querySelector("#output-area").innerHTML = output
            }
        }

        )
    document.getElementById('id-input').value = ""
    document.getElementById('title-input').value = ""
    document.getElementById('todo-status').value = ""
}




function putTodo(e) {
    e.preventDefault();
    let id = document.getElementById('id-input').value
    let title = document.getElementById('title-input').value
    let Initialcompleted = document.getElementById('todo-status').value
    let completed = Initialcompleted.toLowerCase()
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'put',
        headers: {
            'Accept': 'application/json, text/plain, "/"',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ id: id, title: title, completed: completed })
    })
        .then((res) => res.json())
        .then((todo) => {
            if (todo.completed == 'true') {
                let output = `<ul style=" background-color: #318298; color:white; opacity: 0.5;">
                <h2>This Todo was modified</h2>
                <li>ID: ${todo.id}</li>    
                <li>Title: ${todo.title}</li> 
                <li> Completed: ${todo.completed}</li>
                </ul>`
                document.querySelector("#output-area").innerHTML = output
            }

            else {
                let output = `<ul style=" background-color: #318298; color:white;">
                <h2>This Todo was modified</h2>
                <li>ID: ${todo.id}</li>    
                <li>Title: ${todo.title}</li> 
                <li> Completed: ${todo.completed}</li>
                </ul>`
                document.querySelector("#output-area").innerHTML = output
            }
        }

        )
    document.getElementById('id-input').value = ""
    document.getElementById('title-input').value = ""
    document.getElementById('todo-status').value = ""
}