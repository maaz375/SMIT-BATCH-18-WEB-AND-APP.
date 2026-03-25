// var ul = document.getElementById('ul');
// var inp = document.getElementById('inp');

// var todos = JSON.parse(localStorage.getItem('todos')) || [];

// // var statusTxt = 'Pending';


// function todo() {
//     ul.innerHTML = '';

//     if (inp.value.trim() === '')
//         return;

//     var obj = {
//         id: Date.now(),
//         text: inp.value,
//         completed: false,
//     };

//     todos.push(obj);

//     localStorage.setItem('todos', JSON.stringify(todos));

//     renderTodos();

// };


// function renderTodos() {
//     ul.innerHTML = '';
//     for (let i = 0; i < todos.length; i++) {
//         let isCompleted = todos[i].completed;
//         let id = todos[i].id;
//         var li = document.createElement('li');
//         li.innerHTML = todos[i].text;
//         ul.appendChild(li);

//         // delete btn
//         var dlt = document.createElement('button');
//         dlt.innerHTML = 'Delete';
//         li.appendChild(dlt);
//         dlt.addEventListener('click', function () {
//             deleteTodos(id)
//         })

//         // edit btn
//         var edt = document.createElement('button');
//         edt.innerHTML = 'Edit';
//         li.appendChild(edt);
//         edt.addEventListener('click', function () {
//             editTodos(id)
//         })

//         // status btn
//         var status = document.createElement('button')
//         console.log(todos[i].completed)
//         if (todos[i].completed === true) {
//             status.innerHTML = 'Completed';
//         } else {
//             status.innerHTML = 'Pending';
//         }
//         li.appendChild(status);
//         status.addEventListener('click', function () {
//             changeStatus(id);
//         })
//     }

// }

// function deleteTodos(id) {
//     var newTodos = [];
//     for (let i = 0; i < todos.length; i++) {
//         if (todos[i].id !== id)
//             newTodos.push(todos[i])
//     }
//     todos = newTodos;
//     localStorage.setItem('todos', JSON.stringify(todos));
//     renderTodos();
// }


// function editTodos(id) {
//     for (let i = 0; i < todos.length; i++) {
//         if (todos[i].id === id) {
//             let update = prompt('Edit', todos[i].text)
//             todos[i].text = update
//             localStorage.setItem('todos', JSON.stringify(todos))
//         }
//     }
//     renderTodos()
// }

// function changeStatus(id) {
//     var newTodos = [];
//     for (let i = 0; i < todos.length; i++) {
//         // todos[i].completed = !todos[i].completed
//         if (todos[i].id === id) {
//             if(todos[i].completed === false){
//                 todos[i].completed = true
//             } else {
//                 todos[i].completed = false
//             }
//         }
//     }
//     localStorage.setItem('todos', JSON.stringify(todos));
//     renderTodos()
// }
// renderTodos()




// let num1 = 10;

// if(num1 === 10){
//     alert('yes');
// };


// let isLogin = true;
// let userName = '';

// isLogin ? userName = 'Saylani' : userName = 'Smit';

// console.log(userName);


let user = prompt('Enter my name');
let home = 'Karachi';

user = 'zaid' ? home = 'Islamabad' : home = 'Rawalpindi'