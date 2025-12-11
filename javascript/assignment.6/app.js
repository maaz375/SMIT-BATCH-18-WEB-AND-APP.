var num1 = Number(prompt('Enter First Number'));
var num2 = Number(prompt('Enter Second Number'));
var operator = prompt('Select Operator ( +, -, *, /)');

var calculate = 0;

if (operator === '+') {
    calculate = num1 + num2;
} else if (operator === '-') {
    calculate = num1 - num2;
} else if (operator === '*') {
    calculate = num1 * num2;
} else if (operator === '/') {
    calculate = num1 / num2;
} else {
    document.write(`Enter Correct Operator`);
}

document.write(`<h2> Result is: ${calculate} </h2>`)