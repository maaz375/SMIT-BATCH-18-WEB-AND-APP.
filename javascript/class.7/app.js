//  nested if else

var sub1 = Number(prompt("enter sub 1 marks"));
var sub2 = Number(prompt("enter sub 2 marks"));
var sub3 = Number(prompt("enter sub 3 marks"));
var sub4 = Number(prompt("enter sub 4 marks"));
var sub5 = Number(prompt("enter sub 5 marks"));

var sum = sub1 + sub2 + sub3 + sub4 + sub5;

// document.write(`<h1> ${sum} </h1> <br>`);
// document.write(` ${sum} ${sub5} `);

var markObtained = sum;

var totalMarks = 500;

var percentage = ((markObtained * 100) / totalMarks);

document.write(`percentage ${percentage} <br> `);

var grade;

if (percentage <= 100 && percentage > 90) {
    grade = 'A+'
    document.write(`<h1> Grade is ${grade} </h1>`)
} else if(percentage <= 90 && percentage > 80) {
    grade = 'A1'
    document.write(`<h1> Grade is ${grade} </h1>`)
} else if(percentage <= 80 && percentage > 70) {
    grade = 'B'
    document.write(`<h1> Grade is ${grade} </h1>`)
} else if(percentage <= 70 && percentage > 60) {
    grade = 'C'
    document.write(`<h1> Grade is ${grade} </h1>`)
} else if(percentage <= 60 && percentage > 50) {
    grade = 'D'
    document.write(`<h1> Grade is ${grade} </h1>`)
} else {
    grade = 'Book Nhi Parhi Thi Na'
    document.write(`<h4> ${grade} </h4>`)
}