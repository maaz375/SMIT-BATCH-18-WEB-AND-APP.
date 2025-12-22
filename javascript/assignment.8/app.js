var studentName = [];
var studentNames = newArr();
var stringArr = ['yt'];
var numberArr = [18];
var booleanArr = [false];
var mixedArr = ['begam', 23, true];
var networks = [`Jazz ufone sigma`];

var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write(`<h2> Qualifications: </h2> <br> <br>`);

for (var i = 0; i < qualifications.length; i++) {
    document.write((i + 1) + ") " + qualifications[i] + "<br>");
}


var movies = [];

movies[0] = "Avengers: Age of Ultron";
movies[1] = "Spectre";
movies[2] = "Jurassic World";
movies[3] = "Inside Out";

document.write("<h1>Top movies of 2015</h1> <br> <br>");

for (var i = 0; i < movies.length; i++) {
    document.write((i + 1) + ") " + movies[i] + "<br>");
}

document.write("<br><h2>Length of the array: " + movies.length + "</h2> <br> <br> <br>");



var cars = ["Audi", "Volvo", "Ford", "Lamborghini"];

document.write("<h1>Favorite Cars</h1><br> <br>");

document.write(cars.join(",") + "<br><br>");

document.write("First index of the array: 0<br>");
document.write("Car at first index of the array: " + cars[0] + "<br>");
document.write("Last index of the array: " + (cars.length - 1) + "<br>");
document.write("Car at last index of the array: " + cars[cars.length - 1] + "<br> <br> <br> <br>");


var names = ["Michael", "John", "Tony"];
var scores = [320, 230, 480];
var totalMarks = 500;

for (var i = 0; i < 3; i++) {
    var percentage = (scores[i] / totalMarks) * 100;
    document.write("Score of " + names[i] + " is " + scores[i] + ". Percentage: " + percentage + "%<br>");
}



var colors = ["Red", "Green", "Blue"];
document.write("Colors are: " + colors + "<br><br>");

var a = prompt("Enter color for start");
colors.unshift(a);
document.write("Start add: " + colors + "<br><br>");

var b = prompt("Enter color for end");
colors.push(b);
document.write("End add: " + colors + "<br><br>");

colors.unshift("Black", "White");
document.write("Two more add: " + colors + "<br><br>");

colors.shift();
document.write("First remove: " + colors + "<br><br>");

colors.pop();
document.write("Last remove: " + colors + "<br><br>");

var c = prompt("Enter index");
var d = prompt("Enter color");
colors.splice(c, 0, d);
document.write("Index add: " + colors + "<br><br>");

var e = prompt("Enter delete index");
var f = prompt("How many delete");
colors.splice(e, f);
document.write("After delete: " + colors + "<br><br><br>");



var scores = [320, 230, 480, 120];
document.write("Scores of Students : " + scores + " <br><br>");

scores.sort(function (a, b) {
    return a - b;
});

document.write("Ordered Scores of Students : " + scores + "<br><br><br>");




var fruits = ["strawberry", "apple", "orange", "banana"];

document.write("Fruit list: " + fruits + "<br> <br>");

fruits.sort();

document.write("Ordered fruit list: " + fruits + "<br> <br> <br>");




var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = [];

selectedCities = cities.slice(2, 4);

document.write("Cities List: " + cities.join(", ") + "<br> <br>");
document.write("Selected Cities List: " + selectedCities.join(", ") + "<br> <br>");




var arr = ["This ", " is ", " my ", " cat"];

var result = arr.join("");

document.write("Array: " + arr.join(", ") + "<br> <br>");
document.write("String: " + result + "<br> <br> <br>");





var devices = [];

devices[0] = "keyboard";
devices[1] = "mouse";
devices[2] = "printer";
devices[3] = "monitor";
document.write("Device:<br>");
document.write(devices.join(", ") + "<br><br>");

for (var i = 0; i < devices.length; i++) {
    var item = devices.shift();
    document.write("out: " + item + "<br>");
};



var storeValues = [];

storeValues[0] = "keyboard";
storeValues[1] = "mouse";
storeValues[2] = "printer";
storeValues[3] = "monitor";

document.write("Stack:<br>");
document.write(storeValues.join(", ") + "<br><br>");

for (var i = 0; i < storeValues.length; i++) {
    var item = storeValues.pop();
    document.write("out: " + item + "<br>");
};




var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia"];

document.write("<select>");

for (var i = 0; i < manufacturers.length; i++) {
    document.write("<option>" + manufacturers[i] + "</option>");
}

document.write("</select>");



var multiArray = [[], [], []];

document.write("Multidimensional Array: <br><br>");
document.write(multiArray);



var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

document.write("Matrix:<br>");
for (var i = 0; i < matrix.length; i++) {
    document.write(matrix[i].join(" ") + "<br>");
}
