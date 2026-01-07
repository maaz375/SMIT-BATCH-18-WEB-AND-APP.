// var obj1 = {
//     stdName: 'lemon',
//     rollNum: 12,
//     class: 'seven',
//     age: 11,
// }

// document.writeln(obj1.stdName + '<br>');
// document.writeln(obj1.rollNum + '<br>');
// document.writeln(obj1.class + '<br>');
// document.writeln(obj1.age + '<br>');


// for (var key in obj1) {
//     document.writeln(key + ": " + obj1[key] + "<br>")
// };


// var obj1 = {
//     stdName: 'lemon',
//     rollNum: 12,
//     class: 'seven',
//     age: 11,
// }

// var newStd = 'Saleem';

// obj1.stdName = newStd;

// console.log(obj1);


var plan1 = {
    name: "Basic",
    price: 3.99,
    space: 100,
    transfer: 1000,
    pages: 10,
};


var plan2 = {
    name: "Professional",
    price: 5.99,
    space: 500,
    transfer: 5000,
    pages: 50,
};


var plan3 = {
    name: "Ultimate",
    price: 9.99,
    space: 200,
    transfer: 20000,
    pages: 500,
};


// console.log(plan1, plan2, plan3)


document.getElementById("name1").innerHTML = plan1.name;
document.getElementById("price1").innerHTML = plan1.price;
document.getElementById("space1").innerHTML = plan1.space;
document.getElementById("transfer1").innerHTML = plan1.transfer;
document.getElementById("pages1").innerHTML = plan1.pages;


document.getElementById("name2").innerHTML = plan2.name;
document.getElementById("price2").innerHTML = plan2.price;
document.getElementById("space2").innerHTML = plan2.space;
document.getElementById("transfer2").innerHTML = plan2.transfer;
document.getElementById("pages2").innerHTML = plan2.pages;


document.getElementById("name3").innerHTML = plan3.name;
document.getElementById("price3").innerHTML = plan3.price;
document.getElementById("space3").innerHTML = plan3.space;
document.getElementById("transfer3").innerHTML = plan3.transfer;
document.getElementById("pages3").innerHTML = plan3.pages;