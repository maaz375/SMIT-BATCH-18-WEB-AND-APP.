// 1.

for (var i = 1; i <= 5; i++) {
  document.write("Hello World<br>");
}

document.write("<br> <br> <br>");

// 2.

for (var i = 1; i <= 10; i++) {
  document.write(i + " ");
}

document.write("<br><br><br>");

// 3.

var tableNum = prompt("Enter table number");
var tableLen = prompt("Enter table length");

for (var i = 1; i <= tableLen; i++) {
  document.write(tableNum + " x " + i + " = " + (tableNum * i) + "<br>");
}

document.write("<br><br><br>");

// 4.

var mobiles = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];
for (var i = 0; i < mobiles.length; i++) {
  document.write(mobiles[i] + "<br>");
}

document.write("<br><br><br>");

// 5.

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (var i = 0; i < fruits.length; i++) {
  document.write(fruits[i] + "<br>");
}

document.write("<br><br><br>");

// 6.

var n = prompt("Enter number of items");
var items = [];
for (var i = 0; i < n; i++) {
  items[i] = prompt("Enter item " + (i + 1));
}
document.write(items + "<br>");

document.write("<br><br><br>");

// 7.

document.write("Counting: ");
for (var i = 1; i <= 15; i++) document.write(i + ", ");

document.write("<br>Reverse: ");
for (var i = 10; i >= 1; i--) document.write(i + ", ");

document.write("<br>Even: ");
for (var i = 0; i <= 20; i += 2) document.write(i + ", ");

document.write("<br>Odd: ");
for (var i = 1; i < 20; i += 2) document.write(i + ", ");

document.write("<br>Series: ");
for (var i = 2; i <= 20; i += 2) document.write(i + "k, ");

document.write("<br><br><br>");

// 8.

var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Enter item to search");
var found = false;

for (var i = 0; i < bakery.length; i++) {
  if (bakery[i] === search) {
    found = true;
  }
}

if (found) {
  document.write(search + " is available<br>");
} else {
  document.write(search + " is not available<br>");
}

document.write("<br><br><br>");

// 9.

var A = [24, 53, 78, 91, 12];
var largest = A[0];

for (var i = 1; i < A.length; i++) {
  if (A[i] > largest) {
    largest = A[i];
  }
}
document.write("Largest: " + largest + "<br>");

document.write("<br><br><br>");

// 10.

var smallest = A[0];
for (var i = 1; i < A.length; i++) {
  if (A[i] < smallest) {
    smallest = A[i];
  }
}
document.write("Smallest: " + smallest + "<br>");

document.write("<br><br><br>");

// 11.

document.write("Largest: " + largest + "<br>");
document.write("Smallest: " + smallest + "<br>");

document.write("<br><br><br>");

// 12.

for (var i = 5; i <= 100; i += 5) {
  document.write(i + " ");
}

document.write("<br><br><br>");

// 13.

var students = ["Ali", "Sami", "Taha", "Inam"];
var scores = [58, 73, 89, 90];

document.write("<table border='1'>");
for (var i = 0; i < students.length; i++) {
  document.write("<tr><td>" + students[i] + "</td><td>" + scores[i] + "</td></tr>");
}
document.write("</table>");

document.write("<br><br><br>");

// 14.

var nums = [12, 45, 3, 22, 34, 50];
var stopVal = prompt("Enter stop value");

for (var i = 0; i < nums.length; i++) {
  document.write(nums[i] + " ");
  if (nums[i] == stopVal) break;
}

document.write("<br><br><br>");

// 15.

var matrix = [[1,2,3],[4,5,6],[7,8,9]];
for (var i = 0; i < matrix.length; i++) {
  for (var j = 0; j < matrix[i].length; j++) {
    document.write(matrix[i][j] + " ");
  }
  document.write("<br>");
}

document.write("<br><br><br>");

// 16.

var num = prompt("Enter number");
for (var i = num; i > 0; i -= 0.5) {
  document.write(i + "<br>");
}

document.write("<br><br><br>");

// 17.

for (var i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    document.write(i + " is even<br>");
  } else {
    document.write(i + " is odd<br>");
  }
}

document.write("<br><br><br>");

// 18.

var product = 1;
for (var i = 1; i <= 7; i += 2) {
  product = product * i;
}
document.write("Product: " + product + "<br>");

document.write("<br><br><br>");

// 19.

var stars = prompt("Enter stars");
for (var i = stars; i >= 1; i--) {
  for (var j = 1; j <= i; j++) {
    document.write("*");
  }
  document.write("<br>");
}

document.write("<br><br><br>");

// 20.

var lines = prompt("Enter number of lines");

// a
for (var i = 1; i <= lines; i++) {
  document.write("*****<br>");
}

document.write("<br>");

// b
for (var i = 1; i <= lines; i++) {
  for (var j = 1; j <= i; j++) document.write("*");
  document.write("<br>");
}

document.write("<br>");

// c
for (var i = lines; i >= 1; i--) {
  for (var j = 1; j <= i; j++) document.write("*");
  document.write("<br>");
}