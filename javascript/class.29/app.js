//  hoisting


// console.log(num1);
// var num1 = 10;


// console.log(name1);
//  ========================= temporal dead zone (not accessable)
// let name1 = 'maaz';

// console.log(num1);
// console.log(name1);



//                                      var

// var num = 1;
// var num = 7;
// num = 9;


//                                      let

// var num = 2;
// num = 4;
















var ul = document.getElementById('ul');
var inp = document.getElementById('inp');

var todos = JSON.parse(localStorage.getItem('todos')) || [];

var statusTxt = 'Pending';


function todo() {
    ul.innerHTML = '';

    if (inp.value.trim() === '')
        return;

    var obj = {
        id: Date.now(),
        text: inp.value,
        completed: false,
    };

    todos.push(obj);

    localStorage.setItem('todos', JSON.stringify(todos));

    renderTodos();

};


function renderTodos() {
    ul.innerHTML = '';
    for (let i = 0; i < todos.length; i++) {
        let isCompleted = todos[i].completed;
        let id = todos[i].id;
        var li = document.createElement('li');
        li.innerHTML = todos[i].text;
        ul.appendChild(li);

        // delete btn
        var dlt = document.createElement('button');
        dlt.innerHTML = 'Delete';
        li.appendChild(dlt);
        dlt.addEventListener('click', function () {
            deleteTodos(id)
        })

        // edit btn
        var edt = document.createElement('button');
        edt.innerHTML = 'Edit';
        li.appendChild(edt);
        edt.addEventListener('click', function () {
            editTodos()
        })

        // status btn
        var status = document.createElement('button')
        status.innerHTML = statusTxt;
        li.appendChild(status);
        status.addEventListener('click', function () {
            changeStatus(isCompleted)
        })
    }

}

function deleteTodos(id) {
    var newTodos = [];
    for (let i = 0; i < todos.length; i++)
        if (todos[i].id !== id)
            newTodos.push(todos[i])
}
todos = newTodos;
localStorage.setItem('todos', JSON.stringify(todos));
renderTodos();


function editTodos(id) {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id === id) {
            let update = prompt('Edit', todos[i].text)
            todos[i].text = update
            localStorage.setItem('todos', JSON.stringify(todos))
        }
    }
}

function changeStatus() {
    var newTodos = [];
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].completed === 'false' && todos[i].id === id) {
            statusTxt = 'Completed';
        } else if (todos[i].completed === true && todos[i].id === id){
            statusTxt = 'Pending';
        }

    }
    renderTodos()
}

renderTodos()