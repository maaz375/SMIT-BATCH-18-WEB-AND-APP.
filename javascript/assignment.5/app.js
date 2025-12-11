var takingUserName = prompt('plz enter your name');

alert(`Hi, ${takingUserName}`);



var takingNumber = Number(prompt('enter a number to print its multiplication table'));

if (takingNumber === "" || takingNumber === null) {
    takingNumber = 5;
} else {
    takingNumber = takingNumber;
}

document.write(`<h3> Multiplication of table ${takingNumber} </h3>`);

for (var t = 1; t <= 10; t++) {
    document.write(`${takingNumber} X ${t} = ${takingNumber * t} <br>`);
}



var city = prompt(`Enter Your City`);

city = city.toLowerCase();

if (city === "karachi") {
    alert(`Welcome To The City Of Light`);
} else {
    alert(`You are not allowed`);
}



var gender = prompt(`Enter Your Gender`);

gender = gender.toLowerCase();

if (gender === "male") {
    alert(`Hellow Sir`);
}
else if (gender === "female") {
    alert(`Hellow ma'am`);
}
else {
    alert(`You are not allowed`);
}



var color = prompt(`Enter Traffic Signal Color (red, yellow, green):`);

color = color.toLowerCase();

if (color === "red") {
    alert(`Vehicles Must Stop`);
}
else if (color === "yellow") {
    alert(`Vehicles Should Get Ready To Move`);
}
else if (color === "green") {
    alert(`Vehicles Can Move Now`);
}
else {
    alert(`Invalid Color Entered`);
}



var maxAge = prompt(`Enter Maximum Age:`);

var currentAge = prompt(`Enter your current age:`);

maxAge = Number(maxAge);
currentAge = Number(currentAge);

if (currentAge <= maxAge) {
    alert(`You are welcome`);
} else {
    alert(`Sorry, not allowed`);
}



var fuel = prompt(`Enter remaining fuel in car (litres):`);
fuel = Number(fuel);

if (fuel < 0.25) {
    alert(`Please refill the fuel in your car`);
} else {
    alert(`Fuel is enough`);
}



var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}
if ("car" < "cat") {
    alert("car is smaller than cat");
}



var sub1 = Number(prompt("enter sub 1 marks"));
var sub2 = Number(prompt("enter sub 2 marks"));
var sub3 = Number(prompt("enter sub 3 marks"));

var sum = sub1 + sub2 + sub3;

var markObtained = sum;

var totalMarks = 300;

var percentage = ((markObtained * 100) / totalMarks);

var grade;
var remarks;

if (percentage <= 100 && percentage >= 80) {
    grade = 'A-one';
    remarks = "Excellent";
}
else if (percentage <= 79 && percentage >= 70) {
    grade = 'A';
    remarks = "Good";
}
else if (percentage <= 69 && percentage >= 60) {
    grade = 'B';
    remarks = "You need to improve";
} else {
    grade = 'Fail';
    remarks = "Sorry";
}

document.write("<br><br> <h2>Marks Sheet</h2>");
document.write("Total marks: " + totalMarks + "<br>");
document.write("Marks obtained: " + markObtained + "<br>");
document.write("Percentage: " + percentage + "<br>");
document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks + "<br>");



var item1 = prompt("Enter name of item 1");
var item2 = prompt("Enter name of item 2");

var price1 = Number(prompt("Enter price of item 1"));
var price2 = Number(prompt("Enter price of item 2"));

var qty1 = Number(prompt("Enter quantity of item 1"));
var qty2 = Number(prompt("Enter quantity of item 2"));

var shipping = Number(prompt("Enter shipping charges"));

var cost1 = price1 * qty1;
var cost2 = price2 * qty2;

var totalCost = cost1 + cost2 + shipping;

var discount = 0;

if (totalCost > 2000) {
    discount = totalCost * 0.10;
}

var finalAmount = totalCost - discount;

document.write("<h2>Shopping Cart Receipt</h2> <br> <br>");
document.write("Item 1: " + item1 + " (x" + qty1 + ") = " + cost1 + " PKR<br>");
document.write("Item 2: " + item2 + " (x" + qty2 + ") = " + cost2 + " PKR<br><br>");

document.write("Shipping Charges: " + shipping + " PKR<br>");
document.write("Total Cost: " + totalCost + " PKR<br>");

if (discount > 0) {
    document.write("Discount (10%): " + discount + " PKR<br>");
} else {
    document.write("Discount: Not Applicable<br>");
}

document.write("<strong>Final Amount: " + finalAmount + " PKR</strong> <br> <br>");




var secret = 1;
var guess = Number(prompt("Guess the secret number (1-10):"));

if (guess === secret) {
    alert("Bingo! Correct answer");
} else if (guess + 1 === secret) {
    alert("Close enough to the correct answer");
} else {
    alert("Try again!");
}



var num = Number(prompt("Enter a number:"));

if (num % 3 === 0) {
    alert("The number is divisible by 3");
} else {
    alert("The number is NOT divisible by 3");
}



var teamA = prompt("Enter Team A name:");
var scoreA = Number(prompt("Enter total score of " + teamA));

var teamB = prompt("Enter Team B name:");
var scoreB = Number(prompt("Enter total score of " + teamB));

if (scoreA > scoreB) {
    alert(teamA + " have won the game!");
} else if (scoreB > scoreA) {
    alert(teamB + " have won the game!");
} else {
    alert("It's a tie!");
}



var myString = "Pakistan";
var myNumber = 92;
var myBoolean = true;

if (typeof myString === "string") {
    document.write(`<br><br> ${myString} is a string <br>`);
}

if (typeof myNumber === "number") {
    document.write(`${myNumber} is a number<br>`);
}

if (typeof myBoolean === "boolean") {
    document.write(`${myBoolean} is a boolean <br><br>`);
}



var num = Number(prompt("Enter a number then is guess the number is even or odd:"));

if (num % 2 === 0) {
    alert("The number is even");
} else {
    alert("The number is odd");
}




var T = Number(prompt("Enter the temperature:"));

if (T > 40) {
    alert("It is too hot outside.");
} else if (T > 30) {
    alert("The Weather today is Normal.");
} else if (T > 20) {
    alert("Today's Weather is cool.");
} else if (T > 10) {
    alert("OMG! Today's weather is so Cool.");
} else {
    alert("It's very cold.");
}




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
    alert(`Enter Correct Operator`);
}

alert(` Result is: ${calculate} `)




var day = prompt("Enter the day name:");

day = day.toLowerCase()

if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
    alert("It's a week day");
} else if (day === "Saturday") {
    alert("It's weekend");
} else if (day === "Sunday") {
    alert("Yay! It's a holiday");
} else {
    alert("Invalid day name");
}



var score = prompt("Enter your score:");
score = Number(score);

if (score > 50) {
    alert("You are passed");
} else {
    alert("Try again!");
}



var num1 = Number(prompt("Enter the first number:"));
var num2 = Number(prompt("Enter the second number:"));

if (num1 > num2) {
    alert("The greater number of " + num1 + " and " + num2 + " is " + num1 + ".");
} else if (num2 > num1) {
    alert("The greater number of " + num1 + " and " + num2 + " is " + num2 + ".");
} else {
    alert("Both numbers are equal.");
}




var lang = prompt("Enter language code (e.g. 'es', 'de', 'fr'):");
lang = lang.toLowerCase();

if (lang === "es") {
    alert("¡Hola, Mundo!");
} else if (lang === "de") {
    alert("Hallo, Welt!");
} else if (lang === "fr") {
    alert("Bonjour, le monde!");
} else {
    alert("Hello, World!");
}



var num = Number(prompt("Enter a number:"));

if (num > 0) {
    alert("The number is positive.");
} else if (num < 0) {
    alert("The number is negative.");
} else {
    alert("The number is zero.");
}



var number = Number(prompt("Enter a number:"));
var noun = prompt("Enter a noun:");

if (number === 1) {
    alert(number + " " + noun);
} else {
    alert(number + " " + noun + "s");
}