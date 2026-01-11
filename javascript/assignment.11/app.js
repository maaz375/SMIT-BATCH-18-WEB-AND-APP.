var taskInput = document.getElementById('taskInput');
var taskList = document.getElementById('taskList');

function addTask() {

    if (taskInput.value === "") {
        alert("Task likho pehle");
        return;
    }

    var li = document.createElement('li');

    var text = document.createTextNode(taskInput.value);
    li.appendChild(text);

    taskList.appendChild(li);

    var editBtn = document.createElement('button');
    editBtn.innerText = "Edit";
    editBtn.className = "edit";
    li.appendChild(editBtn);

    editBtn.addEventListener('click', function () {
        var oldValue = li.firstChild.nodeValue;
        var newValue = prompt("Edit task", oldValue);

        if (newValue !== null && newValue !== "") {
            li.firstChild.nodeValue = newValue;
        }
    });

    var deleteBtn = document.createElement('button');
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete";
    li.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', function () {
        this.parentNode.remove();
    });

    taskInput.value = "";
}

function deleteAll() {
    taskList.innerHTML = "";
}