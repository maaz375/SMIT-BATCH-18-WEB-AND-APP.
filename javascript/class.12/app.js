// function calculator(n1, n2, operate) {
//     var total;
//     if (operate === '+') {
//         total = n1 + n2;
//     } else if (operate === '-') {
//         total = n1 - n2;
//     } else if (operate === '*') {
//         total = n1 * n2;
//     } else if (operate === '/') {
//         total = n1 / n2;
//     } else {
//         alert(`please enter right number or operator`);
//     }

//     return total;

// };

// var num1 = Number(prompt(`enter number 1`));
// var num2 = Number(prompt(`enter number 2`));
// var operator = prompt(`enter operator`);

// var output = (calculator(num1, num2, operator));

// var heading = document.getElementById('h1');
// heading.innerHTML = output;

// var heading = document.createElement(`h1`);

// heading.innerHTML = output;

// document.body.appendChild(heading);

// console.log(`heading ${heading}`);





var myName = 'smit';

function scope() {
    var newName = 'saylani';
    return newName;
}

console.log(scope());

console.log(myName);

console.log(newName);
