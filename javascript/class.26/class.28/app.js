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
        var li = document.createElement('li');
        li.innerHTML = todos[i].text;
        ul.appendChild(li);
    };
};