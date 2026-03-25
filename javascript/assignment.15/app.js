var students = [];

function add() {
    var userName = document.getElementById('namee').value;
    var userAge = document.getElementById('age').value;
    var UserMarks = document.getElementById('marks').value;

    if (namee === "" || age === "" || marks === "") {
        alert("All fields are required.");
        return;
    };

    if (age < 18) {
        alert("Students under 18 are not allowed.");
        return;
    };

    function getResult(marks) {
        if (marks >= 80) {
            return "Distinction";
        } else if (marks >= 60) {
            return "Pass";
        } else if (marks >= 40) {
            return "Average";
        } else {
            return "Fail";
        }
    };

    let student = {
        name: namee,
        age: age,
        marks: marks,
        result: result
    };

    students.push(student);

    showStudents();

    document.getElementById('namee').value = "";
    document.getElementById('age').value = "";
    document.getElementById('marks').value = "";

};