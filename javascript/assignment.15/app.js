let students = [];
let editIndex = -1;

function addStudent() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let marks = document.getElementById("marks").value;

    if (name === "" || age === "" || marks === "") {
        alert("All fields are required");
        return;
    }

    let student = { name, age, marks };

    if (editIndex === -1) {
        students.push(student);
    } else {
        students[editIndex] = student;
        editIndex = -1;
    }

    clearFields();
    displayStudents();
}

function displayStudents() {
    let table = document.getElementById("studentTable");
    table.innerHTML = "";

    students.forEach((s, index) => {
        let result = getResult(s.marks);

        table.innerHTML += `
        <tr>
            <td>${s.name}</td>
            <td>${s.age}</td>
            <td>${s.marks}</td>
            <td><span class="badge ${result.class}">${result.text}</span></td>
            <td>
                <button class="edit" onclick="editStudent(${index})">Edit</button>
                <button class="delete" onclick="deleteStudent(${index})">Delete</button>
            </td>
        </tr>
        `;
    });

    document.getElementById("total").innerText = students.length;
}

function getResult(marks) {
    if (marks >= 80) return { text: "Distinction", class: "distinction" };
    if (marks >= 60) return { text: "Pass", class: "pass" };
    if (marks >= 40) return { text: "Average", class: "average" };
    return { text: "Fail", class: "fail" };
}

function editStudent(index) {
    let s = students[index];
    document.getElementById("name").value = s.name;
    document.getElementById("age").value = s.age;
    document.getElementById("marks").value = s.marks;
    editIndex = index;
}

function deleteStudent(index) {
    students.splice(index, 1);
    displayStudents();
}

function clearFields() {
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("marks").value = "";
}