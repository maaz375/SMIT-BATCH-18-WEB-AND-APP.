var num1 = 13;
var num2 = 9;
var sum = num1 + num2;

alert("The sum of 13 n 9 is " + sum)

var subtract = num1 - num2;

alert("Result of subtracting 9 from 13 is " + subtract)

var multiply = num1 * num2;

alert("Result of multiplying 13 n 9 is " + multiply)

var divide = num1 / num2

alert("Result of dividing 13 by 9 is " + divide)

var remainder = num1 % num2

alert("Remainder of dividing 13 by 9 is " + remainder)



var num = 3;

document.write("Value after variable declaration is " + num + '<br>' + '<br>')

document.write("Initial value: " + num + '<br>' + '<br>')

num++;

document.write("Value after increment is: " + num + '<br>' + '<br>')

num = num + 7;

document.write("Value after addition is: " + num + '<br>' + '<br>')

num--;

document.write("Value after decriment is: " + num + '<br>' + '<br>')

num = num % 3;

document.write("The remainder is: " + num + '<br>' + '<br>' + '<br>' + '<br>')



var ticket = 600;
var totalCoast = ticket * 5;

document.write("Total cost to buy 5 tickets to a movie is: " + totalCoast + "PKR" + '<br>' + '<br>' + '<br>' + '<br>')



var num8 = 8;

document.write("Multiplication table of " + num8 + '<br>' + '<br>')

for (var i = 1;
    i <= 10;
    i++) {
    document.write(num8 + " x " + i + " = " + (num8 * i) + '<br>');
}

document.write('<br>' + '<br>')



var c = 12;
var f = (c * 9 / 5) + 32;
document.write(c + "°C is " + f + "°F" + '<br>');

f = 68;
c = (f - 32) * 5 / 9;
document.write(f + "°F is " + c + "°C" + '<br>');



var priceItem1 = 560;
var priceItem2 = 200;

var quantityItem1 = 2;
var quantityItem2 = 5;

var shippingCharges = 150;

var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

document.write("<h2> Shopping Cart </h2>");
document.write("Price of item 1 is: " + priceItem1 + "PKR <br>");
document.write("Quantity of item 1 is: " + quantityItem1 + '<br>');
document.write("Price of item 2 is: " + priceItem2 + "PKR<br>");
document.write("Quantity of item 2 is: " + quantityItem2 + '<br> <br>');
document.write("Shipping Charges: " + shippingCharges + "PKR <br> <br>");
document.write("<b>Total Cost of your order is: " + totalCost + " PKR </b> <br> <br> <br>");



var totalMarks = 1200;
var marksObtained = 900;

var percentage = (marksObtained / totalMarks) * 100;

document.write("<h2> Marks Sheet </h2>");
document.write("Total Marks: " + totalMarks + '<br>');
document.write("Marks Obtained: " + marksObtained + '<br>');
document.write("Percentage: " + percentage + "% <br> <br> <br>");



var totalPKR = (10 * 104) + (25 * 28);

document.write("<h2> Currency in PKR </h2>")
document.write("Total Currency in Pakistani Rupees: " + totalPKR + " PKR <br> <br> <br> <br>");



var num = 5;

var result = ((num + 5) * 10) / 2;

alert(result);



var currentYear = 2025;
var birthYear = 2010;

var age1 = currentYear - birthYear;
var age2 = age1 - 1;

document.write("<b> The Age Calculator </b> <br> <br>")
document.write("Current Year: " + currentYear + '<br>')
document.write("Birth Year: " + birthYear + '<br> <br>')
document.write("They are either " + age2 + " or " + age1 + " years old. <br> <br> <br> <br>");



var radius = 12;
var pi = 3.142;

var circumference = 2 * pi * radius;
var area = pi * radius * radius;

document.write("<h2> <b> The Geometrizer </b> </h2>");
document.write("Radius of a circle: " + radius + '<br>');
document.write("The circumference is: " + circumference + '<br>');
document.write("The area is: " + area + '<br> <br> <br> <br>');



var a = 10

document.write("Result: <br>")
document.write("The value of a is: " + a + '<br>')
document.write(".............................. <br> <br>")

++a;
document.write("The value of ++a is: " + a + '<br>')
document.write("Now the value of a is: " + a + '<br> <br> <br>')

document.write("The value of a++ is: " + a + '<br>')
a++;
document.write("Now the value of a is: " + a + '<br> <br> <br>')

--a;
document.write("The value of --a is: " + a + '<br>')
document.write("Now the value of a is: " + a + '<br> <br> <br>')

document.write("The value of a-- is: " + a + '<br>')
a--;
document.write("Now the value of a is: " + a + '<br> <br> <br> <br> <br>')




var a = 2, b = 1;

document.write("a is: " + a + '<br>')
document.write("b is: " + b + '<br>')

var result = --a - --b + ++b + b--;

document.write("Result is " + result + '<br> <br> <br>')



var snack = 'egg';
var age = 15;
var maximunAge = 80;
var quantity = 5;
var answer = (maximunAge - age) * quantity;hgtrf

document.write("<h2> The Life Time Supply Calculator </h2> <br> <br>")
document.write("Faviourite Snack: " + snack + '<br>')
document.write("Current Age: " + age + '<br>')
document.write("Estimated Maximum Age: " + maximunAge + '<br>')
document.write("Amount of snacks per day: " + quantity + '<br> <br>')
document.write("You will need " + answer + " eggs to last you until the ripe old age of " + maximunAge)