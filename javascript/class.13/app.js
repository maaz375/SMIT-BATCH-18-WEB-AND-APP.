// LOOP

// For loop


// for (var I = 0; I <= 10; I++) {
//     document.write(`${I} Hello <br>`);
// }

// for (var I = 10; I >= 0; I--) {
//     document.write(`${I} Hello <br>`);
// }

// var arr = ['civic', 'i3', 'i5', 'i7', 'revo', 'e-tron'];

// for (var i = 0; i < arr.length; i++) {
//     document.write(`${arr[i]} <br>`)
// }

// for (var i = 1; i <=10; i++) {
//     document.write(`2 X ${i} = ${2 * i} <br>`);
// }

var userInput = Number(prompt(`enter the number`));
var userLenght = Number(prompt(`enter the lenght`));

for (var i = 1; i <= userLenght; i++) {
    if (userInput && userLenght >= 1) {
        document.write(userInput + ' X ' + i + ' = ' + userInput * i + '<br>');
    } else {
        document.write('please enter right numbers');
    }
}