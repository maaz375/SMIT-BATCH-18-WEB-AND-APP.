//  1.

for (var i = 1; i <= 5; i++) {
    document.write(i + ' ');
};

document.write('<br> <br> <br> <br> <br>');
//  2.

for (var i = 1; i <= 10; i++) {
    document.write(i + '<br>');
};

document.write('<br> <br> <br> <br> <br>');
// 3.

var number = Number(prompt('Enter a number to prints its multiplication table'));
var length = Number(prompt('Enter a number how many times u want'));
document.write('Multliplication table of ' + number + '<br>');
document.write('Length ' + length + '<br> <br>')

for (var i = 1; i <= length; i++) {
    document.write(number + " X " + i + " = " + (number * i) + "<br>");
};

document.write('<br> <br> <br> <br> <br>');
//  4.

var arry1 = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];

for (var i = 0; i < arry1.length; i++) {
    document.write(arry1[i] + '<br>');
};

document.write('<br> <br> <br> <br> <br>');
//  5.

var arry2 = ["Apple", "Banana", "Mango", "Orange", "Strawberry"];

for (var i = 0; i < arry2.length; i++) {
    document.write(arry2[i] + "<br>");
}

document.write('<br>');

for (var i = 0; i < arry2.length; i++) {
    document.write("Element at index " + i + " is " + arry2[i] + "<br>");
};

document.write('<br> <br> <br> <br> <br>');
//  6.

var n = Number(prompt("Enter number of items:"));
document.write('Number of items:' + n + '<br>');
document.write('Items: <br><br>');

var arry3 = [];

for (var i = 0; i < n; i++) {
    arry3[i] = prompt("Enter item " + (i + 1));
}

for (var i = 0; i < arry3.length; i++) {
    document.write(arry3[i] + "<br>");
};

document.write('<br> <br> <br> <br> <br>');
//  7.