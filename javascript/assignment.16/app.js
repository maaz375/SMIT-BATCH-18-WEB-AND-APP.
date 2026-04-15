document.write('Section 1.' + '<br> <br>');

//            1.
document.write('Ans of 1: <br> b) New Array. <br> <br>');

//            2.
document.write('Ans of 2: <br> c)  Selecting elements based on condition. <br> <br>');

//            3.
document.write('Ans of 3: <br> forEach() does not return anything. <br> <br>');

//            4.
document.write('Ans of 4: <br> Find(). <br> <br>');

//            5.
document.write('Ans of 5: <br> findIndex(). <br> <br> <br> <br>');



document.write('Section 2.' + '<br> <br>');

//             1.
document.write('Ans of 1: <br> [2, 4, 6, 8] <br> <br>');

//             2.
document.write('Ans of 2: <br> [15] <br> <br>');

//             3.
document.write('Ans of 3: <br> [6] <br> <br> <br> <br>');



document.write('Section 3.' + '<br> <br>');

//             1.
let arr1 = [1, 2, 3, 4, 5];
let square = arr1.map(num => num * num);
document.write('Ans of 1: <br>' + square + '<br> <br>');

//            2.
let evenNumbers = arr1.filter(num => num % 2 === 0);
document.write('Ans of 2: <br>' + evenNumbers + '<br> <br>');

//            3.
let sum = arr1.reduce((accumulated, current) => accumulated + current);
document.write('Ans of 3: <br>' + sum + '<br> <br>');

//           4.
let greater = arr1.find(num => num > 3);
document.write('Ans of 4: <br>' + greater + '<br> <br>');

//           5.
let getIndex = arr1.findIndex(num => num > 3);
document.write('Ans of 5: <br>' + getIndex + '<br> <br>');

//           6.
let arr2 = [1,2];
let arr3 = [3,4];
let merge = arr2.concat(arr3);
document.write('Ans of 6: <br>' + merge + '<br> <br>');

//          7.
let arr4 = ['Hello', 'World'];
let join = arr4.join(' ');
document.write('Ans of 7: <br>' + join + '<br> <br>');

//          8.
let arr5 = [2, 5, 8, 9, 1, 6, 0, 3];
let sort = arr5.sort((a, b) => a - b);
document.write('Ans of 8: <br>' + sort + '<br> <br>');

//          9.
let reverse = arr1.reverse();
document.write('Ans of 9: <br>' + reverse + '<br> <br> <br> <br>');



document.write('Section 4.' + '<br> <br>');


let students = [
{name:'Ali',marks:80},
{name:'Sara',marks:45},
{name:'Ahmed',marks:70}
];

let passingStudents = students.filter(student => student.marks >= 50);
document.write('Passing Students <br>' + passingStudents + '<br> <br>');


let extract = students.map(students => students.name);
document.write('Extracting students name <br>' + extract + '<br> <br>');

let totalMarks = students.reduce((total, student) => total + student.marks, 0);
document.write('Calculate total marks <br>' + totalMarks + '<br> <br>');